import * as React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import DevideLine from '../../../../../components/common/DevideLine';
import { useTheme } from '../../../../../hooks';
import SpeakQuestion from './SpeakQuestion';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

interface IStepContainerProps {}

const StepContainer: React.FunctionComponent<IStepContainerProps> = props => {
  const { Fonts, FontSize } = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: '5%',
        }}
      >
        <Text
          style={{
            ...Fonts.textRegular,
            fontSize: FontSize.medium + 1,
            fontWeight: '800',
          }}
        >
          Dịch câu dưới qua tiếng việt
        </Text>
      </View>
      <DevideLine />
      {/* body  */}
      <View>
        {/* <MeaningQuestion /> */}
        <SpeakQuestion />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7%',
    paddingTop: '7%',
  },
});

export default StepContainer;
