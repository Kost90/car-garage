import { useQuery } from '@tanstack/react-query';
import { DvlaApi } from '../api/services/dvla/dvla';

export const useGetCar = (plateNumber) =>
  useQuery({
    queryKey: ['car', plateNumber],
    queryFn: () => DvlaApi.getCar(plateNumber),
    staleTime: 5 * 60 * 1000,
  });
