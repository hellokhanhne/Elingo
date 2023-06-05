import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../api';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../../utils/setTokens';
import UserApi from '../../api/user/request';

export interface IUser {
  fullname: string;
  age: string;
  email: string;
  id: number;
  avatar: any;
}

export interface IAuthState {
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  jwt: string | null;
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
  isAuthLoading: true,
  jwt: null,
};

export const register = createAsyncThunk(
  'users/register',
  async (userData: any) => {
    try {
      const response = await authApi.register({
        ...userData,
        username: userData.email,
      });

      const UserInfo = await UserApi.findOne(response.data.user.id);

      await AsyncStorage.setItem('token', response.data.jwt);
      setToken(response.data.jwt);
      return response.data;
    } catch (error) {
      setToken(null);
      throw new Error('Failed to register user');
    }
  },
);

const login = createAsyncThunk('users/login', async (payload: any) => {
  try {
    const response = await authApi.login(payload);
    const UserInfo = await UserApi.findOne(response.data.user.id);

    Toast.show({
      type: 'success',
      text1: 'Login successfully',
    });
    await AsyncStorage.setItem('token', response.data.jwt);
    setToken(response.data.jwt);

    console.warn({
      ...response.data,
      user: {
        ...response.data.user,
        avatar: UserInfo.data.avatar,
      },
    });

    return {
      ...response.data,
      user: {
        ...response.data.user,
        avatar: UserInfo.data.avatar,
      },
    };
  } catch (error: any) {
    console.log(error);
    setToken(null);
    Toast.show({
      type: 'error',
      text1: error?.error?.message || 'Failed to login',
    });
    throw new Error('Failed to login');
  }
});

const loadAuth = createAsyncThunk('users/loadauth', async () => {
  try {
    // const response = await authApi.loadAuth();
    return true;
  } catch (error) {
    await AsyncStorage.removeItem('token');
    setToken(null);
    throw new Error('Failed to load auth');
  }
});

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.jwt = null;
      setToken(null);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.user = action.payload.user;
        state.jwt = action.payload.jwt;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.isAuthenticated = false;
      });
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.user = action.payload.user;
        state.jwt = action.payload.jwt;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, state => {
        state.isAuthLoading = false;
        state.isAuthenticated = false;
      });
    builder.addCase(loadAuth.fulfilled, (state, action) => {
      state.isAuthLoading = false;
    });
  },
});

export const authSelector = (state: { auth: IAuthState }) => {
  return state.auth;
};

const { logout } = slice.actions;

export const AuthAction = {
  login,
  register,
  loadAuth,
  logout,
};

export default slice.reducer;
