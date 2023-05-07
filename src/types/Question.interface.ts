import { IMedia } from '.';

interface IWord {
  url: IMedia;
  name: string;
}
interface IQuestion {
  id: number;
  type: 'write' | 'hear' | 'read' | 'speak' | 'choice' | 'twopair';
  content: any;
  media: IMedia;
  title: string;
  word_medias: IWord[];
}

export default IQuestion;
