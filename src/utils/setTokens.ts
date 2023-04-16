import { axiosInstance } from '../api';

export const setToken = (token: string | null) => {
  if (token) {
    return (axiosInstance.defaults.headers.common['Authorization'] =
      'Bearer ' + token);
  }
  return (axiosInstance.defaults.headers.common['Authorization'] = false);
};
