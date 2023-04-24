import axiosInstance from './axiosInstane';

const authApi = {
  register(data: any) {
    return axiosInstance.post('/auth/local/register', data);
  },

  login(data: any) {
    return axiosInstance.post('/auth/local', data);
  },

  loadAuth() {
    return axiosInstance.get('/user/me');
  },
};

export default authApi;
