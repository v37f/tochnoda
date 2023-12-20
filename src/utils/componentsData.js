// mp4 videos
// import video_1_mp4 from '../videos/mp4/video_1.mp4';
import video_1_NY_mp4 from '../videos/mp4/video_1_NY.mp4';
import video_2_mp4 from '../videos/mp4/video_2.mp4';
import video_3_mp4 from '../videos/mp4/video_3.mp4';
import video_4_mp4 from '../videos/mp4/video_4.mp4';
import video_5_mp4 from '../videos/mp4/video_5.mp4';
import video_6_mp4 from '../videos/mp4/video_6.mp4';
import video_7_mp4 from '../videos/mp4/video_7.mp4';

// webm videos
// import video_1_webm from '../videos/webm/video_1.webm';
import video_1_NY_webm from '../videos/webm/video_1_NY.webm';
import video_2_webm from '../videos/webm/video_2.webm';
import video_3_webm from '../videos/webm/video_3.webm';
import video_4_webm from '../videos/webm/video_4.webm';
import video_5_webm from '../videos/webm/video_5.webm';
import video_6_webm from '../videos/webm/video_6.webm';
import video_7_webm from '../videos/webm/video_7.webm';

// video posters
// import video_1_poster from '../images/video/posters/video_1_poster.png';
import video_1_NY_poster from '../images/video/posters/video_1_NY_poster.png';
import video_2_poster from '../images/video/posters/video_2_poster.png';
import video_3_poster from '../images/video/posters/video_3_poster.png';
import video_4_poster from '../images/video/posters/video_4_poster.png';
import video_5_poster from '../images/video/posters/video_5_poster.png';
import video_6_poster from '../images/video/posters/video_6_poster.png';
import video_7_poster from '../images/video/posters/video_7_poster.png';

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

export const videosData = [
  {
    id: 1,
    sources: [
      {
        src: video_1_NY_webm,
        type: 'video/webm',
      },
      {
        src: video_1_NY_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_1_NY_poster,
  },
  {
    id: 2,
    sources: [
      {
        src: video_2_webm,
        type: 'video/webm',
      },
      {
        src: video_2_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_2_poster,
  },
  {
    id: 3,
    sources: [
      {
        src: video_3_webm,
        type: 'video/webm',
      },
      {
        src: video_3_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_3_poster,
  },
  {
    id: 4,
    sources: [
      {
        src: video_4_webm,
        type: 'video/webm',
      },
      {
        src: video_4_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_4_poster,
  },
  {
    id: 5,
    sources: [
      {
        src: video_5_webm,
        type: 'video/webm',
      },
      {
        src: video_5_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_5_poster,
  },
  {
    id: 6,
    sources: [
      {
        src: video_6_webm,
        type: 'video/webm',
      },
      {
        src: video_6_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_6_poster,
  },
  {
    id: 7,
    sources: [
      {
        src: video_7_webm,
        type: 'video/webm',
      },
      {
        src: video_7_mp4,
        type: 'video/mp4',
      },
    ],
    poster: video_7_poster,
  },
];

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
    id: 1,
    user: {
      name: 'Светлана Савина',
      avatar: avatar_1,
    },
    stars: 5, // number, то 1 до 5
    date: '14.10.2023',
    text: 'Заказываю уже не первый раз и очень рада, что нашла такой прекрасный магазин. Моментальная обратная связь и доставка букетов в лучшем виде. Очень рекомендую',
  },
  {
    id: 2,
    user: {
      name: 'Анастасия Верник',
      avatar: avatar_2,
    },
    stars: 5, // number, то 1 до 5
    date: '07.08.2023',
    text: 'Большое выбор разных цветов. Букеты очень красивые и свежые, еще и по доступным ценам.',
  },
  {
    id: 3,
    user: {
      name: 'Светлана Савина',
      avatar: avatar_1,
    },
    stars: 5, // number, то 1 до 5
    date: '14.10.2023',
    text: 'Заказываю уже не первый раз и очень рада, что нашла такой прекрасный магазин. Моментальная обратная связь и доставка букетов в лучшем виде. Очень рекомендую',
  },
  {
    id: 4,
    user: {
      name: 'Анастасия Верник',
      avatar: avatar_2,
    },
    stars: 5, // number, то 1 до 5
    date: '07.08.2023',
    text: 'Большое выбор разных цветов. Букеты очень красивые и свежые, еще и по доступным ценам.',
  },
  {
    id: 5,
    user: {
      name: 'Светлана Савина',
      avatar: avatar_1,
    },
    stars: 5, // number, то 1 до 5
    date: '14.10.2023',
    text: 'Заказываю уже не первый раз и очень рада, что нашла такой прекрасный магазин. Моментальная обратная связь и доставка букетов в лучшем виде. Очень рекомендую',
  },
  {
    id: 6,
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
