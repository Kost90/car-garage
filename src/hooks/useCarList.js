import { useQuery } from '@tanstack/react-query';
import { DvlaApi } from '../api/services/dvla/dvla';

export const useCarList = (vehicles) =>
  useQuery({
    queryKey: ['car-list', vehicles],
    queryFn: () => DvlaApi.getCars(vehicles),
    enabled: vehicles.length > 0,
    staleTime: 5 * 60 * 1000,
  });
