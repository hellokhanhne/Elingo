import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import StepOne from './StepOne';

interface IStepContainerProps {}

const StepContainer: React.FunctionComponent<IStepContainerProps> = props => {
  return (
    <View style={styles.container}>
      <StepOne />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7.5%',
  },
});

export default StepContainer;
