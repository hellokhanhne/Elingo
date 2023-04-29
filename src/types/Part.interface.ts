import ILession from './Lession.interface';

interface IPart {
  partId: number;
  isCompleted: boolean;
  titleBackground: string[];
  partTitle: string;
  lessions: ILession[];
  partName: string;
}

export default IPart;
