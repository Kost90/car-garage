import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCarByRegNumber } from '../../redux/garageSlice';
import { useGetCar } from '../../hooks/useGetCar';
import { useState } from 'react';
import { CarCardSkeleton } from '../Skeleton';

function CarCard({ carNumber }) {
  const car = useSelector((state) => selectCarByRegNumber(state, carNumber));
  const { data, isLoading } = useGetCar(car.registrationNumber);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      const preloadImages = async () => {
        await new Promise((resolve) => {
          const img = new Image();
          img.src = data.image;
          img.onload = resolve;
          img.onerror = resolve;
        }),
          setImageLoaded(true);
      };

      preloadImages();
    }
  }, [data, isLoading]);

  if (isLoading || !imageLoaded) {
    return <CarCardSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full md:max-w-md bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col mx-auto"
    >
      <img
        src={data.image}
        alt={data.make}
        className="w-full h-48 object-cover transition-all duration-700 ease-in-out transform"
        loading="lazy"
      />

      <div className="p-4 space-y-1">
        <p className="text-gray-500">Registration: {data.registrationNumber}</p>
      </div>

      <Link
        to={`car/${data.registrationNumber}`}
        className="p-4 no-underline text-mainBlack font-bold hover:text-blue-600"
      >
        View car details
      </Link>
    </motion.div>
  );
}

export default CarCard;
