import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../api';

export interface IUser {
  fullname: string;
  age: string;
  email: string;
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
  isAuthLoading: false,
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to register user');
    }
  },
);

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
  },
});

export const authSelector = (state: { auth: IAuthState }) => {
  return state.auth;
};

export default slice.reducer;
