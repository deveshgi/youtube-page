const VideoInfo = ({ video }) => {
  return (
    <div className="space-y-3">

      <h1 className="text-2xl font-bold">
        {video.title}
      </h1>

      <div className="flex justify-between">

        <p className="text-gray-500">
          {video.views} views
        </p>

        <p className="text-gray-500">
          {video.createdAt}
        </p>

      </div>
    </div>
  );
};

export default VideoInfo;