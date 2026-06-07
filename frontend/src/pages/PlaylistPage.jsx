import React from "react";

function PlaylistPage() {
  const playlist = {
    name: "Full Stack Development",
    description:
      "Learn React, Node.js, Express, MongoDB and become a Full Stack Developer.",
    totalVideos: 8,
    thumbnail: "https://picsum.photos/500/300",
  };

  const videos = [
    {
      id: 1,
      title: "React Complete Course",
      channel: "CodeWithDevesh",
      duration: "18:25",
      thumbnail: "https://picsum.photos/400/220?1",
    },
    {
      id: 2,
      title: "Node.js Backend Tutorial",
      channel: "CodeWithDevesh",
      duration: "24:15",
      thumbnail: "https://picsum.photos/400/220?2",
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline",
      channel: "CodeWithDevesh",
      duration: "15:40",
      thumbnail: "https://picsum.photos/400/220?3",
    },
    {
      id: 4,
      title: "JWT Authentication Project",
      channel: "CodeWithDevesh",
      duration: "30:12",
      thumbnail: "https://picsum.photos/400/220?4",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-8 py-8">
      {/* Playlist Info */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Thumbnail */}
        <div className="lg:w-96">
          <img
            src={playlist.thumbnail}
            alt={playlist.name}
            className="rounded-2xl w-full h-64 object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">
            {playlist.name}
          </h1>

          <p className="text-gray-400 mt-4">
            {playlist.description}
          </p>

          <p className="text-gray-500 mt-3">
            {playlist.totalVideos} videos
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
              ▶ Play All
            </button>

            <button className="bg-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-700">
              Shuffle
            </button>
          </div>
        </div>
      </div>

      {/* Videos List */}
      <div className="mt-12 space-y-5">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="flex flex-col md:flex-row items-center gap-5 bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800 transition"
          >
            {/* Index */}
            <div className="text-2xl font-bold text-gray-500 w-10">
              {index + 1}
            </div>

            {/* Thumbnail */}
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-72 h-40 object-cover rounded-lg"
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
            </div>

            {/* Remove Button */}
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Empty Playlist */}
      {videos.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-24">
          <span className="text-7xl">📂</span>

          <h2 className="text-2xl font-semibold mt-4">
            Playlist is empty
          </h2>

          <p className="text-gray-400 mt-2">
            Add videos to this playlist to get started.
          </p>
        </div>
      )}
    </div>
  );
}

export default PlaylistPage;