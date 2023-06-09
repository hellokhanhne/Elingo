import axiosInstance from '../axiosInstane';

const UserApi = {
  findOne(id: number) {
    return axiosInstance.get(`/users/${id}?populate=*`);
  },
  updateExp(id: number, { exp, diamond }: any) {
    return axiosInstance.put(`/users/${id}`, {
      exp,
      diamond,
    });
  },
};

export default UserApi;
