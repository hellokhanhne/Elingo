import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useContext, useRef, useState } from 'react';
import LessionApi from '../api/lession/request';
import { IQuestion } from '../types';
import { useAppSelector } from '../hooks/store';
import { lessionSelector } from '../store/lession';

interface IStatusModal {
  visiable: boolean;
  type: 'success' | 'danger';
  correctAnswer?: string;
}
export interface ILessionContext {
  currentQuestion: IQuestion | undefined;
  handeNextQuestion: any;
  step: number;
  currentResult: string | any[] | any;
  setCurrentResult: any;
  handleCheckAnswer: any;
  statusModal: IStatusModal;
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
  const [statusModal, setStatusModal] = useState<IStatusModal>({
    visiable: false,
    type: 'success',
  });
  const result = useRef<string | any[] | any>();
  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const { currentLessionId } = useAppSelector(lessionSelector);

  const updateCompletedUserMutation = useMutation({
    mutationFn: (id: number) => LessionApi.updateUserCompleted(id),
    onSuccess() {
      queryClient.invalidateQueries(['/parts']);
      navigation.navigate('Home' as never);
    },
  });

  const resetResult = () => {
    result.current = null;
    setStatusModal({
      visiable: false,
      type: 'success',
    });
  };

  const handeNextQuestion = () => {
    resetResult();
    if (question?.id === questions[questions.length - 1].id) {
      updateCompletedUserMutation.mutate(currentLessionId as number);
      return;
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

  const setResult = (r: any) => {
    result.current = r;
  };

  const handleCheckAnswer = () => {
    switch (question?.type) {
      case 'read':
        if (
          result?.current?.toLocaleLowerCase() ===
          question?.content?.answer?.toLocaleLowerCase()
        ) {
          setStatusModal({
            visiable: true,
            type: 'success',
          });
        } else {
          setStatusModal({
            visiable: true,
            type: 'danger',
            correctAnswer: question.content.answer,
          });
        }
        break;
      case 'choice':
        if (
          result?.current?.toLocaleLowerCase() ===
          question?.content?.answer?.toLocaleLowerCase()
        ) {
          setStatusModal({
            visiable: true,
            type: 'success',
          });
        } else {
          setStatusModal({
            visiable: true,
            type: 'danger',
            correctAnswer: question.content.answer,
          });
        }
        break;
      case 'hear':
        if (
          result?.current?.toLocaleLowerCase() ===
          question.title?.toLocaleLowerCase()
        ) {
          console.log(result?.current, question.title);
          setStatusModal({
            visiable: true,
            type: 'success',
          });
        } else {
          setStatusModal({
            visiable: true,
            type: 'danger',
            correctAnswer: question.title,
          });
        }
        break;
      case 'speak':
        if (
          result?.current?.toLocaleLowerCase() ===
          question.title?.toLocaleLowerCase()
        ) {
          setStatusModal({
            visiable: true,
            type: 'success',
          });
        } else {
          setStatusModal({
            visiable: true,
            type: 'danger',
          });
        }
        break;
      case 'twopair':
        if (result?.current === true) {
          setStatusModal({
            visiable: true,
            type: 'success',
          });
        } else {
          setStatusModal({
            visiable: true,
            type: 'danger',
          });
        }
        break;

      default:
        break;
    }
  };

  const values: ILessionContext = {
    currentQuestion: question,
    handeNextQuestion: handeNextQuestion,
    step: step,
    currentResult: result.current,
    setCurrentResult: setResult,
    handleCheckAnswer: handleCheckAnswer,
    statusModal: statusModal,
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
