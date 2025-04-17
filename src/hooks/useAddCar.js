import { useMutation } from '@tanstack/react-query';
import { DvlaApi } from '../api/services/dvla/dvla';

export const useAddCar = () =>
  useMutation({
    mutationFn: (plateNumber) => DvlaApi.addCar(plateNumber),
  });
