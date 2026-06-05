import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <div className="overflow-hidden rounded-xl">
      <ReactPlayer
        url={url}
        controls
        width="100%"
      />
    </div>
  );
};

export default VideoPlayer;