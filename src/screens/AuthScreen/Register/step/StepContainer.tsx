import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import StepOne from './StepOne';
import { useSelector } from 'react-redux';
import { registerFormSelector } from '../../../../store/register';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

interface IStepContainerProps {}

const StepContainer: React.FunctionComponent<IStepContainerProps> = props => {
  const { currentStep } = useSelector(registerFormSelector);

  return (
    <View style={styles.container}>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7.5%',
  },
});

export default StepContainer;
