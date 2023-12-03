import React from 'react';
import videojs from 'video.js';
import './VideoJS.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady, videoSrc } = props;

  React.useEffect(() => {
    var player;
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });
      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
    // Redefine tap handler to able play/pause by tap video on mobiles
    player.boundHandleTechTap_ = () => {
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    };
  }, [options, videoRef, videoSrc]);

  // Dispose the Video.js player when the functional component unmounts
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
