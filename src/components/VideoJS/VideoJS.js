import React from 'react';
import videojs from 'video.js';
import './VideoJS.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady, videoSrc } = props;

  React.useEffect(() => {
    var player;

    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });
    } else {
      player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
    player.poster(options.videoPoster);
    player.playsinline(true);
    player.boundHandleTechTap_ = () => {
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    };
  }, [options, videoRef, videoSrc]);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
