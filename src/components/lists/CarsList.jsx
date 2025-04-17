import { useMemo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { selectAllCars } from '../../redux/garageSlice';
import { useCarList } from '../../hooks/useCarList';
import CarsListItem from './CarsListItem';
import CarCard from '../cards/CarCard';
import LoadingSpinner from '../LoadingSpinner';

function CarsList() {
  const cars = useSelector(selectAllCars);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const { data, isLoading, error, isPending } = useCarList(cars);
  const successful = useMemo(() => data?.successful || [], [data]);

  const handleSelectVehicle = useCallback(
    (registrationNumber) => {
      if (!registrationNumber) {
        setSelectedVehicle(null);

        return;
      }
      const found = successful.find((v) => v.registrationNumber === registrationNumber);
      setSelectedVehicle(found || null);
    },
    [successful],
  );

  if (error) {
    return <h2>Oops, something went wrong: {error.message || error.toString()}</h2>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="flex flex-col my-8 md:my-14">
        <h2 className="mb-5 pb-1 border-b">Your Garage</h2>

        {isPending && <LoadingSpinner />}

        {!isLoading && (
          <div className="flex flex-col w-full">
            {!successful.length ? (
              <p className="text-neutral-500">No vehicles available in your garage.</p>
            ) : (
              <ul className="flex flex-col w-full gap-4">
                <AnimatePresence mode="popLayout">
                  {successful.map((car) => (
                    <CarsListItem key={car.registrationNumber} car={car} onSelect={handleSelectVehicle} />
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>
        )}
      </div>

      {selectedVehicle && <CarCard carNumber={selectedVehicle.registrationNumber} />}
    </div>
  );
}

export default CarsList;
