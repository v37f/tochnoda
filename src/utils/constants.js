// Аватары пользоваталей для отзывов
import avatar_1 from '../images/user_avatar_1.png';
import avatar_2 from '../images/user_avatar_2.png';

// Логотипы клиентов
import RZHD_logo from '../images/clients/RZHD_logo.png';
import RSHB_logo from '../images/clients/RSHB_logo.png';
import GD_logo from '../images/clients/GD_logo.png';
import CH1_logo from '../images/clients/CH1_logo.png';
import SMF_logo from '../images/clients/SMF_logo.png';
import MosMetro_logo from '../images/clients/MosMetro_logo.png';
import SBER_logo from '../images/clients/SBER_logo.png';
import TNT_logo from '../images/clients/TNT_logo.png';
import PochtaBank_logo from '../images/clients/PochtaBank_logo.png';

// Данные социальных сетей
export const socialsData = {
  phone: '79680878880',
  telegram: 'tochnodast',
  instagram: 'tochnodast.ru',
  facebook: 'tochnodast.ru',
  message: 'Здравствуйте! Хочу заказать у Вас миник',
};

// Вопросы/ответы
export const questionsData = [
  {
    question: 'Возможна ли доставка цветов по области?',
    answer: 'Да, с помощью сервиса Яндекс Доставка',
  },
  {
    question: 'Как я могу оплатить свой заказ?',
    answer: 'Оплата перевод онлайн или наличными',
  },
  {
    question: 'Могу ли отправить букет инкогнито?',
    answer: 'Да',
  },
  {
    question: 'Можно ли заказать доставку в день заказа?',
    answer: 'Да, также есть доставка в течение часа',
  },
  {
    question: 'Можно ли к букету добавить открытку?',
    answer:
      'Сможем бесплатно подписать стильные открытки каллиграфическим почерком с вашими пожеланиями',
  },
];

// Отзывы
export const reviewsData = [
  {
    user: {
      name: 'Светлана Савина',
      avatar: avatar_1,
    },
    stars: 5, // number, то 1 до 5
    date: '14.10.2023',
    text: 'Заказываю уже не первый раз и очень рада, что нашла такой прекрасный магазин. Моментальная обратная связь и доставка букетов в лучшем виде. Очень рекомендую',
  },
  {
    user: {
      name: 'Анастасия Верник',
      avatar: avatar_2,
    },
    stars: 5, // number, то 1 до 5
    date: '07.08.2023',
    text: 'Большое выбор разных цветов. Букеты очень красивые и свежые, еще и по доступным ценам.',
  },
  {
    user: {
      name: 'Светлана Савина',
      avatar: avatar_1,
    },
    stars: 5, // number, то 1 до 5
    date: '14.10.2023',
    text: 'Заказываю уже не первый раз и очень рада, что нашла такой прекрасный магазин. Моментальная обратная связь и доставка букетов в лучшем виде. Очень рекомендую',
  },
  {
    user: {
      name: 'Анастасия Верник',
      avatar: avatar_2,
    },
    stars: 5, // number, то 1 до 5
    date: '07.08.2023',
    text: 'Большое выбор разных цветов. Букеты очень красивые и свежые, еще и по доступным ценам.',
  },
  {
    user: {
      name: 'Светлана Савина',
      avatar: avatar_1,
    },
    stars: 5, // number, то 1 до 5
    date: '14.10.2023',
    text: 'Заказываю уже не первый раз и очень рада, что нашла такой прекрасный магазин. Моментальная обратная связь и доставка букетов в лучшем виде. Очень рекомендую',
  },
  {
    user: {
      name: 'Анастасия Верник',
      avatar: avatar_2,
    },
    stars: 5, // number, то 1 до 5
    date: '07.08.2023',
    text: 'Большое выбор разных цветов. Букеты очень красивые и свежые, еще и по доступным ценам.',
  },
];

export const clientsData = [
  { id: 1, title: 'РЖД', logo: RZHD_logo },
  { id: 2, title: 'Россельхозбанк', logo: RSHB_logo },
  { id: 3, title: 'Госсударственная Дума', logo: GD_logo },
  { id: 4, title: 'Первый канал', logo: CH1_logo },
  { id: 5, title: 'СоюзМультФильм', logo: SMF_logo },
  { id: 6, title: 'Московское Метро', logo: MosMetro_logo },
  { id: 7, title: 'СБЕР', logo: SBER_logo },
  { id: 8, title: 'Телеканал ТНТ', logo: TNT_logo },
  { id: 9, title: 'ПочтаБанк', logo: PochtaBank_logo },
];
