import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { IPartRequest } from './type';
import { IPart } from '../../types';
import axiosInstance from '../axiosInstane';

export const useGetListPart = (
  params: IPartRequest,
  options?: UseQueryOptions<IPart[]>,
) => {
  return useQuery<IPart[]>(
    ['/parts', params],
    async () => {
      let { data } = await axiosInstance.get(`/parts`, { params });
      return data;
    },
    options,
  );
};
