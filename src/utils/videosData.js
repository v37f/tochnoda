// mp4 videos
import video_1_mp4 from '../videos/mp4/video_1.mp4';
import video_1_NY_mp4 from '../videos/mp4/video_1_NY.mp4';
import video_2_mp4 from '../videos/mp4/video_2.mp4';
import video_3_mp4 from '../videos/mp4/video_3.mp4';
import video_4_mp4 from '../videos/mp4/video_4.mp4';
import video_5_mp4 from '../videos/mp4/video_5.mp4';
import video_6_mp4 from '../videos/mp4/video_6.mp4';
import video_7_mp4 from '../videos/mp4/video_7.mp4';

// webm videos
import video_1_webm from '../videos/webm/video_1.webm';
import video_1_NY_webm from '../videos/webm/video_1_NY.webm';
import video_2_webm from '../videos/webm/video_2.webm';
import video_3_webm from '../videos/webm/video_3.webm';
import video_4_webm from '../videos/webm/video_4.webm';
import video_5_webm from '../videos/webm/video_5.webm';
import video_6_webm from '../videos/webm/video_6.webm';
import video_7_webm from '../videos/webm/video_7.webm';

// video posters
import video_1_poster from '../images/video/posters/video_1_poster.png';
import video_1_NY_poster from '../images/video/posters/video_1_NY_poster.png';
import video_2_poster from '../images/video/posters/video_2_poster.png';
import video_3_poster from '../images/video/posters/video_3_poster.png';
import video_4_poster from '../images/video/posters/video_4_poster.png';
import video_5_poster from '../images/video/posters/video_5_poster.png';
import video_6_poster from '../images/video/posters/video_6_poster.png';
import video_7_poster from '../images/video/posters/video_7_poster.png';

const videosData = [
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

export default videosData;
