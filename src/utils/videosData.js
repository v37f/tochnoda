import video_1 from '../videos/video_1.mp4';
import video_1_NY from '../videos/video_1_NY.mp4';
import video_2 from '../videos/video_2.mp4';
import video_3 from '../videos/video_3.mp4';
import video_4 from '../videos/video_4.mp4';
import video_5 from '../videos/video_5.mp4';
import video_6 from '../videos/video_6.mp4';
import video_7 from '../videos/video_7.mp4';
import video_1_poster from '../images/video_1_poster.png';
import video_1_NY_poster from '../images/video_1_NY_poster.png';
import video_2_poster from '../images/video_2_poster.png';
import video_3_poster from '../images/video_3_poster.png';
import video_4_poster from '../images/video_4_poster.png';
import video_5_poster from '../images/video_5_poster.png';
import video_6_poster from '../images/video_6_poster.png';
import video_7_poster from '../images/video_7_poster.png';

const videosData = [
  {
    id: 1,
    sources: [
      {
        src: video_1_NY,
        type: 'video/mp4',
      },
    ],
    poster: video_1_NY_poster,
  },
  {
    id: 2,
    sources: [
      {
        src: video_2,
        type: 'video/mp4',
      },
    ],
    poster: video_2_poster,
  },
  {
    id: 3,
    sources: [
      {
        src: video_3,
        type: 'video/mp4',
      },
    ],
    poster: video_3_poster,
  },
  {
    id: 4,
    sources: [
      {
        src: video_4,
        type: 'video/mp4',
      },
    ],
    poster: video_4_poster,
  },
  {
    id: 5,
    sources: [
      {
        src: video_5,
        type: 'video/mp4',
      },
    ],
    poster: video_5_poster,
  },
  {
    id: 6,
    sources: [
      {
        src: video_6,
        type: 'video/mp4',
      },
    ],
    poster: video_6_poster,
  },
  {
    id: 7,
    sources: [
      {
        src: video_7,
        type: 'video/mp4',
      },
    ],
    poster: video_7_poster,
  },
];

export default videosData;
