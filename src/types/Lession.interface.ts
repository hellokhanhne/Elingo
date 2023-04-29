import IQuestion from './Question.interface';

interface ILession {
  lessionId: number;
  lessionTitle: string;
  isCompeleted: boolean;
  questions: IQuestion[];
  prevCompleted?: boolean;
  type: string;
}

export default ILession;
