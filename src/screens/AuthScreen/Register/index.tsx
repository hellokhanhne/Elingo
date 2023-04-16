import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BackWithPercentIndicator from '../../../components/common/BackWithPercentIndicator';
import { Button } from '../../../components/common/Button';
import StepContainer from './step/StepContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerFormSelector,
  setCurrentStepRegister,
} from '../../../store/register';

interface IRegisterScreenProps {}

const RegisterScreen: React.FunctionComponent<IRegisterScreenProps> = props => {
  const navigate = useNavigation();

  const { currentStep, data } = useSelector(registerFormSelector);

  // console.log(currentStep);

  const dispatch = useDispatch();

  const handleContinue = () => {
    if (currentStep === 4) {
      console.log(data);
      return;
    }
    dispatch(setCurrentStepRegister(currentStep + 1));
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate.goBack();
    } else {
      dispatch(setCurrentStepRegister(currentStep - 1));
    }
  };

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <BackWithPercentIndicator
        onBack={handleBack}
        percent={(100 / 4) * currentStep}
      />

      {/* body content  */}
      <View style={styles.bodyContainer}>
        <StepContainer />
      </View>
      {/* bottom  */}
      <View style={styles.bottomContainer}>
        <Button
          type={true ? 'filled' : 'light'}
          active={true}
          text="Tiếp tục"
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: '2.5%',
    paddingBottom: '25%',
  },
  bodyContainer: {
    marginTop: '10%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    borderTopColor: '#F5F5F5',
    borderTopWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
  },
});

export default RegisterScreen;
