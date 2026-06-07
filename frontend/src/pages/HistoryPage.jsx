import React from "react";

function HistoryPage() {
  const historyVideos = [
    {
      id: 1,
      title: "React Complete Tutorial",
      channel: "CodeWithDevesh",
      views: "25K views",
      watchedAt: "2 hours ago",
      thumbnail: "https://picsum.photos/400/220?1",
    },
    {
      id: 2,
      title: "Node.js Backend Project",
      channel: "CodeWithDevesh",
      views: "18K views",
      watchedAt: "Yesterday",
      thumbnail: "https://picsum.photos/400/220?2",
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline",
      channel: "CodeWithDevesh",
      views: "30K views",
      watchedAt: "3 days ago",
      thumbnail: "https://picsum.photos/400/220?3",
    },
    {
      id: 4,
      title: "JavaScript Interview Questions",
      channel: "CodeWithDevesh",
      views: "42K views",
      watchedAt: "1 week ago",
      thumbnail: "https://picsum.photos/400/220?4",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-8 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">
        Watch History
      </h1>

      {/* Videos */}
      <div className="space-y-6">
        {historyVideos.map((video) => (
          <div
            key={video.id}
            className="bg-zinc-900 rounded-xl overflow-hidden flex flex-col md:flex-row hover:bg-zinc-800 transition"
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full md:w-80 h-48 object-cover"
            />

            {/* Details */}
            <div className="flex-1 p-5">
              <h2 className="text-xl font-semibold">
                {video.title}
              </h2>

              <p className="text-gray-400 mt-2">
                {video.channel}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {video.views}
              </p>

              <p className="text-gray-400 text-sm mt-4">
                Watched {video.watchedAt}
              </p>
            </div>

            {/* Remove Button */}
            <div className="p-5 flex items-center">
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;