import * as React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import DevideLine from '../../../../../components/common/DevideLine';
import { useQuestionContext } from '../../../../../context/LessionContext';
import { useTheme } from '../../../../../hooks';
import { IQuestion } from '../../../../../types';
import SpeakQuestion from './SpeakQuestion';
import ChoiceQuestion from './ChoiceQuestion';
import AudioQuestion from './AudioQuestion';
import MeaningQuestion from './MeaningQuestion';
import WordPairQuestion from './WordPairQuestion';
import { IQuestionProps } from './IQuestionProps.type';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

interface IStepContainerProps {
  questions: IQuestion[];
}

interface IQuestionComponent extends IQuestionProps {
  Component: React.FunctionComponent<any>;
}

const QuestionComponent = ({ question, Component }: IQuestionComponent) => {
  return <Component question={question} />;
};

const StepContainer: React.FunctionComponent<IStepContainerProps> = ({
  questions,
}) => {
  const { Fonts, FontSize } = useTheme();
  const { currentQuestion } = useQuestionContext();
  let Component;
  switch (currentQuestion?.type) {
    case 'speak':
      Component = SpeakQuestion;
      break;
    case 'choice':
      Component = ChoiceQuestion;
      break;
    case 'hear':
      Component = AudioQuestion;
      break;
    case 'read':
      Component = MeaningQuestion;
      break;
    case 'twopair':
      Component = WordPairQuestion;
      break;
    default:
      break;
  }
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
        <QuestionComponent
          Component={Component as any}
          question={currentQuestion!}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7%',
    paddingTop: '7%',
    height: '100%',
  },
});

export default StepContainer;
