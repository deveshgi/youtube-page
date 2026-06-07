import React from "react";

function VideoPage() {
  const recommendedVideos = [
    {
      id: 1,
      title: "Node.js Backend Project",
      channel: "CodeWithDevesh",
      views: "12K views",
      thumbnail: "https://picsum.photos/300/180?1",
    },
    {
      id: 2,
      title: "MongoDB Aggregation Pipeline",
      channel: "CodeWithDevesh",
      views: "8K views",
      thumbnail: "https://picsum.photos/300/180?2",
    },
    {
      id: 3,
      title: "Express.js Tutorial",
      channel: "CodeWithDevesh",
      views: "20K views",
      thumbnail: "https://picsum.photos/300/180?3",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="lg:col-span-2">

          {/* Video Player */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allowFullScreen
            />
          </div>

          {/* Video Title */}
          <h1 className="text-2xl font-bold mt-5">
            React Complete Course for Beginners
          </h1>

          {/* Channel Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-5">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100"
                alt="channel"
                className="w-14 h-14 rounded-full"
              />

              <div>
                <h2 className="font-semibold text-lg">
                  CodeWithDevesh
                </h2>

                <p className="text-gray-400 text-sm">
                  12.5K subscribers
                </p>
              </div>

              <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-medium">
                Subscribe
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <button className="bg-zinc-800 px-5 py-2 rounded-full hover:bg-zinc-700">
                👍 Like
              </button>

              <button className="bg-zinc-800 px-5 py-2 rounded-full hover:bg-zinc-700">
                🔗 Share
              </button>

              <button className="bg-zinc-800 px-5 py-2 rounded-full hover:bg-zinc-700">
                💾 Save
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-zinc-900 rounded-2xl p-5 mt-6">
            <p className="text-gray-300">
              Welcome to this complete React course.
              In this video you'll learn React fundamentals,
              hooks, components, props, state management,
              and project building.
            </p>
          </div>

          {/* Comments */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6">
              Comments
            </h2>

            <div className="space-y-5">
              <div className="bg-zinc-900 p-4 rounded-xl">
                <h3 className="font-semibold">
                  Rahul Kumar
                </h3>

                <p className="text-gray-300 mt-2">
                  Great explanation! Thanks for this tutorial.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl">
                <h3 className="font-semibold">
                  Aman Singh
                </h3>

                <p className="text-gray-300 mt-2">
                  Very useful content 👍
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Recommended Videos
          </h2>

          <div className="space-y-5">
            {recommendedVideos.map((video) => (
              <div
                key={video.id}
                className="flex gap-4 cursor-pointer hover:bg-zinc-900 p-2 rounded-xl transition"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-40 h-24 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-medium line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {video.channel}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {video.views}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default VideoPage;