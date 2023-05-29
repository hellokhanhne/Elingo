import axiosInstance from '../axiosInstane';

const UserApi = {
  findOne(id: number) {
    return axiosInstance.get(`/users/${id}?populate=*`);
  },
};

export default UserApi;
