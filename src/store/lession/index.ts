import { createSlice } from '@reduxjs/toolkit';
import { ILession } from '../../types';

export interface ILessionState {
  currentLessionId: number | null;
  lession?: ILession;
}

const initialState: ILessionState = {
  currentLessionId: null,
};

const slice = createSlice({
  name: 'lession',
  initialState,
  reducers: {
    setCurrentLessionId: (state, action) => {
      state.currentLessionId = action.payload.id;
      state.lession = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { setCurrentLessionId } = slice.actions;

export const lessionSelector = (state: { lession: ILessionState }) => {
  return state.lession;
};

export default slice.reducer;
