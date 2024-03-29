import IQuestion from './Question.interface';

interface ILession {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  type: string;
  complete_users: any[];
  isCompleted: boolean;
  prevCompleted: boolean;
  questions: IQuestion[];
  exp: number;
  diamond: number;
}

export default ILession;
