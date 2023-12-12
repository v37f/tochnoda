import avatar_1 from '../images/user_avatar_1.png';
import avatar_2 from '../images/user_avatar_2.png';

export const socialsData = {
  phone: '79680878880',
  telegram: 'tochnodast',
  instagram: 'tochnodast.ru',
  facebook: 'tochnodast.ru',
  message: 'Здравствуйте! Хочу заказать у Вас миник',
};

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
];
