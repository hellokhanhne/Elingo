import * as React from 'react';
import { useSelector } from 'react-redux';
import { ISurvayState, survaySelector } from '../../../store/survay';
import StepFive from './StepFive';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepSix from './StepSix';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

export interface IStepContainerProps {}

const StepContainer = (props: IStepContainerProps) => {
  const { currentStep } = useSelector(survaySelector) as ISurvayState;

  return (
    <>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
      {currentStep === 5 && <StepFive />}
      {currentStep === 6 && <StepSix />}
    </>
  );
};

export default StepContainer;
