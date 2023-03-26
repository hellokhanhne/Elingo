import ICONS from './icons';

const languages: ILanguage[] = [
  {
    name: 'Việt Nam',
    icon: ICONS.Vietnam,
  },
  {
    name: 'Trung Quốc',
    icon: ICONS.China,
  },
  {
    name: 'Mỹ',
    icon: ICONS.USA,
  },
  {
    name: 'Tây Ban Nha',
    icon: ICONS.Spain,
  },
  {
    name: 'Indonesia',
    icon: ICONS.Indonesia,
  },
];

export interface ILanguage {
  name: string;
  icon: any;
}
export default languages;
