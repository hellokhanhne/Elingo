import { createSlice } from '@reduxjs/toolkit';

export interface IRegisterForm {
  fullname: string;
  age: string;
  email: string;
  password: string;
}

export interface IRegisterFormState {
  data: IRegisterForm | null;
  currentStep: 1 | 2 | 3 | 4;
}

const initialState: IRegisterFormState = {
  data: {
    fullname: '',
    age: '',
    email: '',
    password: '',
  },
  currentStep: 1,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentStepRegister(state, { payload }) {
      // console.log('set current step');
      state.currentStep = payload;
    },
    setDataRegisterForm(state, { payload }) {
      state.data = {
        ...state.data,
        ...payload,
      };
    },
  },
  extraReducers(builder) {},
});

export const { setCurrentStepRegister, setDataRegisterForm } = slice.actions;

export const registerFormSelector = (state: {
  registerForm: IRegisterFormState;
}) => {
  return state.registerForm;
};

export default slice.reducer;
