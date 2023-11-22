import { lesson1, lesson2, lesson3, lesson4 } from '../../../../assets/images';

type LessonCard = {
  id: number;
  isAvailable: boolean;
  image: string;
  title: string;
  url: string;
};

export const lessons: LessonCard[] = [
  {
    id: 1,
    isAvailable: true,
    image: lesson1,
    title: 'Battle of Britain',
    url: 'https://immortalgames.co.uk/battle-of-britain/b/',
  },
  {
    id: 2,
    isAvailable: false,
    image: lesson2,
    title: 'Women in History',
    url: '',
  },
  {
    id: 3,
    isAvailable: false,
    image: lesson3,
    title: 'Cuban Missile Crisis',
    url: '',
  },
  {
    id: 4,
    isAvailable: false,
    image: lesson4,
    title: 'Bali: Puri Kantor Legacy',
    url: '',
  },
];
