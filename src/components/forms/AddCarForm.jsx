import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';

import { selectAllCars, addCar } from '../../redux/garageSlice';
import { plateNumberSchema } from '../../validations/plateNumberSchema';
import { useAddCar } from '../../hooks/useAddCar';
import { checkIfExistCar } from '../../utils/checkExistCar';
import Button from '../ui/Button';

export default function AddCarForm() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({ resolver: zodResolver(plateNumberSchema) });

  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const { mutateAsync, isPending } = useAddCar();
  const [formError, setFormError] = useState(null);

  const onSubmit = async ({ plateNumber }) => {
    try {
      plateNumber = plateNumber.toUpperCase();
      setFormError(null);
      if (checkIfExistCar(plateNumber, cars)) {
        setFormError('Car already exist in Garage');
        reset();

        return;
      }

      const car = await mutateAsync(plateNumber);
      dispatch(addCar({ registrationNumber: car.registrationNumber }));
      reset();
    } catch (err) {
      setFormError(err.message || 'Failed to add car');
    }
  };

  return (
    <div className="flex flex-col items-start">
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-2">
        <input
          type="text"
          name="plateNumber"
          placeholder="Enter plate number"
          disabled={isPending}
          className={`w-full md:w-96 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm`}
          {...register('plateNumber')}
        />

        <Button
          type="submit"
          disabled={isPending}
          text={isPending ? 'Adding...' : 'Add Car'}
          className="bg-mainBlack text-white hover:bg-lineText hover:text-mainBlack w-24 md:w-24"
        />
      </form>

      {errors.plateNumber && <p className="text-danger text-sm mt-1">{errors.plateNumber.message}</p>}
      {formError && <p className="text-danger text-sm mt-1">{formError}</p>}
    </div>
  );
}
