import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { ILession } from '../../types';
import axiosInstance from '../axiosInstane';
import { ILessionRequest } from './type';

export const useGetOneLession = (
  id: string | number,
  params: ILessionRequest,
  options?: UseQueryOptions<ILession>,
) => {
  return useQuery<ILession>(
    [`/lessions/${id}`, params],
    async () => {
      let { data } = await axiosInstance.get(`/lessions/${id}`, { params });
      return data;
    },
    options,
  );
};
