import axiosInstance from '../axiosInstane';

const LessionApi = {
  updateUserCompleted(lessionId: number) {
    return axiosInstance.patch(`/lessions/completed/${lessionId}`);
  },
};

export default LessionApi;
