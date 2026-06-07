import React from "react";

function ChannelPage() {
  const videos = [
    {
      id: 1,
      title: "React Complete Course",
      thumbnail: "https://picsum.photos/400/250?1",
      views: "25K views",
      uploaded: "2 weeks ago",
    },
    {
      id: 2,
      title: "Node.js Backend Project",
      thumbnail: "https://picsum.photos/400/250?2",
      views: "18K views",
      uploaded: "1 month ago",
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline",
      thumbnail: "https://picsum.photos/400/250?3",
      views: "31K views",
      uploaded: "3 weeks ago",
    },
    {
      id: 4,
      title: "JavaScript Interview Questions",
      thumbnail: "https://picsum.photos/400/250?4",
      views: "42K views",
      uploaded: "5 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Cover Image */}
      <div className="h-60 w-full">
        <img
          src="https://picsum.photos/1400/300"
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        {/* Channel Info */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start -mt-16">
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/200"
            alt="avatar"
            className="w-40 h-40 rounded-full border-4 border-zinc-950"
          />

          {/* Details */}
          <div className="flex-1 mt-4">
            <h1 className="text-4xl font-bold">
              CodeWithDevesh
            </h1>

            <p className="text-gray-400 mt-2">
              @codewithdevesh • 12.5K subscribers • 48 videos
            </p>

            <p className="text-gray-300 mt-4 max-w-2xl">
              Welcome to my YouTube channel. Here you will find tutorials
              on React, Node.js, Express, MongoDB and Full Stack Development.
            </p>

            <div className="mt-5">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-800 mt-10">
          <div className="flex gap-8 text-gray-400 font-medium pb-4">
            <button className="text-white border-b-2 border-white pb-2">
              Videos
            </button>

            <button className="hover:text-white">
              Shorts
            </button>

            <button className="hover:text-white">
              Playlists
            </button>

            <button className="hover:text-white">
              About
            </button>
          </div>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pb-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold line-clamp-2">
                  {video.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {video.views}
                </p>

                <p className="text-gray-500 text-sm">
                  {video.uploaded}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChannelPage;