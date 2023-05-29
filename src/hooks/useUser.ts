import { authSelector } from '../store/auth';
import { useAppSelector } from './store';

const useUser = () => {
  const auth = useAppSelector(authSelector);
  return auth.user;
};

export default useUser;
