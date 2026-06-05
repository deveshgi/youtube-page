import VideoCard from "./VideoCard";

function VideoGrid ({
  videos
}) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

      {videos.map((video) => (
        <VideoCard
          key={video._id}
          video={video}
        />
      ))}

    </div>
  );
};

export default VideoGrid;