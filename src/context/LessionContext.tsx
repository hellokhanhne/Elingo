import React, { useContext, useState } from 'react';
import { ILession, IQuestion } from '../types';
import { useNavigation } from '@react-navigation/native';

export interface ILessionContext {
  currentQuestion: IQuestion | undefined;
  handeNextQuestion: any;
  step: number;
}

export const LessionContext = React.createContext<ILessionContext | null>(null);

const LessionProvider = ({
  children,
  questions,
}: {
  children: any;
  questions: IQuestion[];
}) => {
  const [question, setQuestion] = useState<IQuestion | undefined>(questions[0]);
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  const handeNextQuestion = () => {
    if (question?.id === questions[questions.length - 1].id) {
      return navigation.navigate('Home' as never);
    } else {
      const index = questions.findIndex(
        (q: IQuestion) => q.id === question?.id,
      );
      setQuestion(() => {
        return questions[index + 1];
      });
      setStep(s => s + 1);
    }
  };

  const values: ILessionContext = {
    currentQuestion: question,
    handeNextQuestion: handeNextQuestion,
    step: step,
  };
  return (
    <LessionContext.Provider value={values}>{children}</LessionContext.Provider>
  );
};

const useQuestionContext = () => {
  return useContext(LessionContext) as ILessionContext;
};

export { useQuestionContext };

export default LessionProvider;
