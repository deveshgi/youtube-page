import React from "react";

const videos = [
  {
    id: 1,
    title: "React JS Full Course 2026",
    channel: "CodeWithDevesh",
    views: "150K views",
    time: "2 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Node.js Backend Project",
    channel: "Programming Hub",
    views: "80K views",
    time: "1 week ago",
    thumbnail:
      "https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "JavaScript Interview Questions",
    channel: "Tech World",
    views: "95K views",
    time: "5 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "MongoDB Crash Course",
    channel: "Coding Ninja",
    views: "60K views",
    time: "3 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/ofme2o29ngU/maxresdefault.jpg",
  },
];

const categories = [
  "All",
  "Music",
  "Gaming",
  "Programming",
  "React",
  "Node.js",
  "AI",
  "Live",
  "News",
  "Sports",
];

function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Categories */}
      <div className="sticky top-0 z-10 bg-[#0f0f0f] py-3">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition ${
                index === 0
                  ? "bg-white text-black"
                  : "bg-[#272727] hover:bg-[#3d3d3d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Video Info */}
            <div className="flex gap-3 mt-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold shrink-0">
                {video.channel[0]}
              </div>

              {/* Details */}
              <div>
                <h3 className="font-semibold text-sm line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1 hover:text-white cursor-pointer">
                  {video.channel}
                </p>

                <p className="text-gray-400 text-xs">
                  {video.views} • {video.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;