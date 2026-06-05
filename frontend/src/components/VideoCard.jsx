import { formatViews } from "../utils/formatViews";

function VideoCard ({
  video
}) {
  return (
    <div className="cursor-pointer">

      <img
        src={video.thumbnail}
        alt={video.title}
        className="rounded-xl w-full aspect-video object-cover"
      />

      <div className="mt-3">

        <h2 className="font-semibold line-clamp-2">
          {video.title}
        </h2>

        <p className="text-gray-500 text-sm">
          {video.owner.username}
        </p>

        <p className="text-gray-500 text-sm">
          {formatViews(video.views)} views
        </p>

      </div>
    </div>
  );
};

export default VideoCard;