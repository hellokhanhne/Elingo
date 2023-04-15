import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BackWithPercentIndicator from '../../../components/common/BackWithPercentIndicator';
import { Button } from '../../../components/common/Button';
import StepContainer from './step/StepContainer';

interface IRegisterScreenProps {}

const RegisterScreen: React.FunctionComponent<IRegisterScreenProps> = props => {
  const navigate = useNavigation();

  const handleBack = () => {
    // if (currentStep === 1) {
    //   navigate.goBack();
    // } else {
    //   dispatch(setCurrentStep(currentStep - 1));
    // }
  };

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <BackWithPercentIndicator onBack={handleBack} percent={(100 / 6) * 2} />

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
          onPress={() => {}}
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
