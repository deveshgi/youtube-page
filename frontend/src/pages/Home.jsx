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
    <div className="flex bg-[#0f0f0f] text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-20 md:w-56 p-4 border-r border-gray-800">
        <ul className="space-y-6">
          <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
            🏠 Home
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
            🎬 Shorts
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
            📺 Subscriptions
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
            📚 Library
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto mb-8 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                index === 0
                  ? "bg-white text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="cursor-pointer hover:scale-[1.02] transition duration-300"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded-xl w-full h-52 object-cover"
              />

              <div className="flex mt-3 gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold">
                  {video.channel[0]}
                </div>

                <div>
                  <h3 className="font-semibold text-sm line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
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
      </main>
    </div>
  );
}

export default Home;
