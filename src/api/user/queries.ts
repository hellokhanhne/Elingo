import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { IUser } from '../../store/auth';
import axiosInstance from '../axiosInstane';

export const useGetListUsers = (
  params: any,
  options?: UseQueryOptions<IUser[]>,
) => {
  return useQuery<IUser[]>(
    ['/users', params],
    async () => {
      let { data } = await axiosInstance.get(`/users?populate=*`, {});
      return data;
    },
    options,
  );
};
