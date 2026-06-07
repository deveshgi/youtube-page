import React from "react";

function LikedVideosPage() {
  const likedVideos = [
    {
      id: 1,
      title: "React Complete Tutorial",
      channel: "CodeWithDevesh",
      views: "25K views",
      duration: "18:32",
      thumbnail: "https://picsum.photos/400/220?1",
    },
    {
      id: 2,
      title: "Node.js Backend Project",
      channel: "CodeWithDevesh",
      views: "18K views",
      duration: "24:10",
      thumbnail: "https://picsum.photos/400/220?2",
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline",
      channel: "CodeWithDevesh",
      views: "30K views",
      duration: "16:45",
      thumbnail: "https://picsum.photos/400/220?3",
    },
    {
      id: 4,
      title: "JavaScript Interview Questions",
      channel: "CodeWithDevesh",
      views: "42K views",
      duration: "29:15",
      thumbnail: "https://picsum.photos/400/220?4",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Liked Videos
        </h1>

        <p className="text-gray-400 mt-2">
          {likedVideos.length} videos
        </p>
      </div>

      {/* Video List */}
      <div className="space-y-6">
        {likedVideos.map((video) => (
          <div
            key={video.id}
            className="flex flex-col md:flex-row gap-5 bg-zinc-900 rounded-xl p-4 hover:bg-zinc-800 transition"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full md:w-80 h-48 object-cover rounded-lg"
              />

              <span className="absolute bottom-2 right-2 bg-black/80 text-sm px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                {video.title}
              </h2>

              <p className="text-gray-400 mt-2">
                {video.channel}
              </p>

              <p className="text-gray-500 mt-1">
                {video.views}
              </p>

              <button className="mt-6 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg">
                Remove Like
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {likedVideos.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-24">
          <span className="text-7xl">❤️</span>

          <h2 className="text-2xl font-semibold mt-5">
            No liked videos yet
          </h2>

          <p className="text-gray-400 mt-2">
            Videos you like will appear here.
          </p>
        </div>
      )}
    </div>
  );
}

export default LikedVideosPage;