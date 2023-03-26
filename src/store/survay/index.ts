import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'react-native';

export interface ISurvay {
  nativeLanguage: string;
  appLanguage: string;
  learnLanguage: string;
  knowedBy: string;
  level: number;
  learnReasons: string;
  learnTarget: string;
}

export interface ISurvayState {
  survey: ISurvay | null;
  currentStep: 1 | 2 | 3 | 4 | 5 | 6;
  stepTexts: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  };
}

const initialState: ISurvayState = {
  survey: null,
  currentStep: 1,
  stepTexts: {
    1: 'Chọn ngôn ngữ bạn muốn sử dụng trên Elingo !',
    2: 'Chọn ngôn ngữ bạn muốn học !',
    3: 'Bạn biết đến Elingo từ đâu ?',
    5: 'Chọn khả năng tiếng anh của bạn !',
    4: 'Bạn học tiếng anh vì điều gì ?',
    6: 'Chọn mục tiêu học hàng ngày của bạn !',
  },
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentStep(state, { payload }) {
      state.currentStep = payload;
    },
    setSurvay(state, { payload }) {
      state.survey = {
        ...state.survey,
        ...payload,
      };
    },
  },
  extraReducers(builder) {},
});

export const { setCurrentStep, setSurvay } = slice.actions;

export const survaySelector = (state: { survay: ISurvayState }) => {
  return state.survay;
};

export default slice.reducer;
