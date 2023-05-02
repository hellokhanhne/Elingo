interface IQuestion {
  questionId: number;
  type: string;
  answer: string | any;
  content: string | string[] | any;
  media: string | string[];
}

export default IQuestion;
