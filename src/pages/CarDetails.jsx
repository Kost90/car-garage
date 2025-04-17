import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCar } from '../hooks/useGetCar';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/LoadingSpinner';

function CarDetails() {
  const { registrationnumber } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCar(registrationnumber);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      const preloadImages = async () => {
        await new Promise((resolve) => {
          const img = new Image();
          img.src = data.image;
          img.onload = resolve;
          img.onerror = resolve;
        }),
          setImagesLoaded(true);
      };

      preloadImages();
    }
  }, [data, isLoading]);

  if (isLoading || !imagesLoaded) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!data) {
    return <h2>No car details available.</h2>;
  }

  return (
    <div className="p-6">
      <Button text={'Back to garage'} onClick={() => navigate('/')} className="bg-mainBlack text-white hover:bg-lineText hover:text-mainBlack w-32 md:w-32 my-5" />
      <h2 className="mb-4 font-semibold">Car Details</h2>
      <p className="text-gray-500">
        <strong className="text-mainBlack">Registration Number:</strong> {data.registrationNumber}
      </p>
      <p className="text-gray-500">
        <strong className="text-mainBlack">Make:</strong> {data.make}
      </p>
      <p className="text-gray-500">
        <strong className="text-mainBlack">Year:</strong> {data.yearOfManufacture}
      </p>
      <p className="text-gray-500">
        <strong className="text-mainBlack">Color:</strong> {data.colour}
      </p>
      <p className="text-gray-500">
        <strong className="text-mainBlack">Fuel type:</strong> {data.fuelType}
      </p>
      <p className="text-gray-500">
        <strong className="text-mainBlack">MOT expire date:</strong> {data.motExpiryDate}
      </p>
      <p className="text-gray-500">
        <img src={data.image} alt={`${data.make}`} className="w-full h-[450px] object-cover" loading="lazy" />
      </p>
    </div>
  );
}

export default CarDetails;
