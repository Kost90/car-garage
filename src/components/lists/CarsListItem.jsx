import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeCar } from '../../redux/garageSlice';
import Button from '../ui/Button';

function CarsListItem({ car, onSelect }) {
  const dispatch = useDispatch();

  const handleRemove = useCallback(() => {
    dispatch(removeCar(car.registrationNumber));
    onSelect(null);
  }, [dispatch, onSelect, car.registrationNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-bgMain rounded-sm shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row items-center justify-between gap-4 p-4 w-full"
    >
      <div className="text-center md:text-left flex-1">
        <p className="text-mainBlack text-base font-semibold">Registration number: {car.registrationNumber}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
        <Button onClick={() => onSelect(car.registrationNumber)} text={'Select'} className="bg-mainBlack text-white hover:bg-lineText hover:text-mainBlack w-24 md:w-24" />
        <Link
          to={`car/${car.registrationNumber}`}
          className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-md text-center no-underline text-sm md:text-base w-24 md:w-24"
        >
          Details
        </Link>
        <Button className={'bg-danger hover:bg-red-600 text-white w-24 md:w-24'} onClick={handleRemove} text={'Remove'} />
      </div>
    </motion.div>
  );
}

export default CarsListItem;
