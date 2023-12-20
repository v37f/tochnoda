import './VideoGrid.scss';
import React, { useState } from 'react';
import VideoJS from '../VideoJS/VideoJS';

function VideoGrid({ videosData }) {
  const [videos, setVideos] = useState(videosData);
  const [videoJsOptions, setVideoJsOptions] = useState({
    autoplay: false,
    preload: 'auto',
    fill: true,
    controls: true,
    disablePictureInPicture: true,
    noUITitleAttributes: true,
    muted: true,
    sources: videos[0].sources,
    videoPoster: videos[0].poster,
  });

  const handlePreviewClick = (i) => {
    setVideoJsOptions({
      ...videoJsOptions,
      autoplay: true,
      sources: videos[i].sources,
      videoPoster: videos[i].poster,
    });
    const newVideos = [...videos];
    const temp = newVideos[0];
    newVideos[0] = newVideos[i];
    newVideos[i] = temp;

    setVideos(newVideos);
  };

  return (
    <div className="video-grid">
      <div className="video-grid__item video-grid__item_position_item-1">
        <VideoJS options={videoJsOptions} />
      </div>

      {videos.slice(1).map((video, i) => (
        <div
          className={`video-grid__item video-grid__item_position_item-${i + 2}`}
          key={video.id}
          onClick={() => handlePreviewClick(i + 1)}
        >
          <img
            className="video-grid__thumbnail"
            src={video.poster}
            alt="video poster"
          />
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
