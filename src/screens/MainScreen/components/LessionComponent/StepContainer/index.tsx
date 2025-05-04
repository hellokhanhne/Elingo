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

const QuestionComponent = ({
  question,
  Component,
  ...props
}: IQuestionComponent) => {
  return <Component question={question} {...props} />;
};

const StepContainer: React.FunctionComponent<IStepContainerProps> = ({
  questions,
}) => {
  const { Fonts, FontSize } = useTheme();
  const { currentQuestion } = useQuestionContext();
  let Component;
  let title;
  switch (currentQuestion?.type) {
    case 'speak':
      title = 'Phát âm câu dưới đây';
      Component = SpeakQuestion;
      break;
    case 'choice':
      title = 'Chọn đáp án phù hợp';
      Component = ChoiceQuestion;
      break;
    case 'hear':
      title = 'Nhập vào những gì bạn nghe thấy';
      Component = AudioQuestion;
      break;
    case 'read':
      title = 'Dịch câu dưới qua tiếng việt';
      Component = MeaningQuestion;
      break;
    case 'twopair':
      Component = WordPairQuestion;
      title = 'Ghép từ với nghĩa tương ứng';
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
            // color: 'red',
          }}
        >
          {title}
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
