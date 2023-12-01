import './VideoPreview.scss';

function VideoPreview({ video }) {
  return (
    <img className="video-preview" src={video.poster} alt="video poster" />
  );
}

export default VideoPreview;
