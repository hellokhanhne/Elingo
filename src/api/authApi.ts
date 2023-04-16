import axiosInstance from './axiosInstane';

const authApi = {
  register(data: any) {
    return axiosInstance.post('/auth/local/register', data);
  },

  login(data: any) {
    return axiosInstance.post('/auth/local', data);
  },

  loadUser() {
    return axiosInstance.get('/auth/loadUser');
  },
  changePassword(data: any) {
    return axiosInstance.post('/auth/changePassword', data);
  },
};

export default authApi;
