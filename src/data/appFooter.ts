import { nanoid } from 'nanoid';
import facebook from '../img/footer__facebook.svg';
import instagram from '../img/footer__instagram.svg';
import telegram from '../img/footer__telegram.svg';

export const appFooterLinks = [
  {
    id: nanoid(),
    text: 'Политика конфиденциальности',
  },
  {
    id: nanoid(),
    text: 'Аналитика',
  },
  {
    id: nanoid(),
    text: 'Сообщество',
  },
  {
    id: nanoid(),
    text: 'Для организаций',
  },
];

export const appFooterSocials = [
  {
    id: nanoid(),
    img: facebook,
  },
  {
    id: nanoid(),
    img: instagram,
  },
  {
    id: nanoid(),
    img: telegram,
  },
];
