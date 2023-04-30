import ILession from './Lession.interface';

interface IPart {
  id: number;
  title: string;
  titleBackground: string[];
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  lessions: ILession[];
  complete_users: any[];
}

export default IPart;
