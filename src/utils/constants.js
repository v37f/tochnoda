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
    id: 1,
    question: 'Возможна ли доставка цветов по области?',
    answer: 'Да, с помощью сервиса Яндекс Доставка',
  },
  {
    id: 2,
    question: 'Как я могу оплатить свой заказ?',
    answer: 'Оплата перевод онлайн или наличными',
  },
  {
    id: 3,
    question: 'Могу ли отправить букет инкогнито?',
    answer: 'Да',
  },
  {
    id: 4,
    question: 'Можно ли заказать доставку в день заказа?',
    answer: 'Да, также есть доставка в течение часа',
  },
  {
    id: 5,
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

export const DESKTOP_NAVIGATOR_LINK =
  'https://yandex.ru/maps/213/moscow/?from=mapframe&indoorLevel=1&ll=37.637111%2C55.793227&mode=routes&rtext=~55.793227%2C37.637111&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32160377050&source=mapframe&utm_source=mapframe&z=17';
export const MOBILE_NAVIGATOR_LINK =
  'yandexnavi://build_route_on_map?lat_to=55.793227&lon_to=37.637111';
