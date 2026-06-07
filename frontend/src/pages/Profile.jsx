import React from "react";

function Profile() {
  const videos = [
    {
      id: 1,
      title: "React Tutorial",
      thumbnail: "https://picsum.photos/400/250?1",
      views: "12K views",
    },
    {
      id: 2,
      title: "Node.js Backend",
      thumbnail: "https://picsum.photos/400/250?2",
      views: "8K views",
    },
    {
      id: 3,
      title: "MongoDB Complete Guide",
      thumbnail: "https://picsum.photos/400/250?3",
      views: "15K views",
    },
    {
      id: 4,
      title: "JavaScript Interview Questions",
      thumbnail: "https://picsum.photos/400/250?4",
      views: "20K views",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cover Image */}
      <div className="h-60 w-full">
        <img
          src="https://picsum.photos/1200/300"
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-16">
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/200"
            alt="avatar"
            className="w-40 h-40 rounded-full border-4 border-black"
          />

          {/* Info */}
          <div className="flex-1 mt-5">
            <h1 className="text-3xl font-bold">Devesh Kumar</h1>

            <p className="text-gray-400 mt-2">
              @deveshkumar • 12.5K subscribers • 48 videos
            </p>

            <p className="text-gray-300 mt-3">
              Full Stack Developer | React | Node.js | MongoDB
            </p>

            <div className="flex gap-4 mt-5">
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
                Subscribe
              </button>

              <button className="bg-zinc-800 px-6 py-2 rounded-full hover:bg-zinc-700">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">About</h2>

          <p className="text-gray-400">
            Welcome to my channel. Here I upload videos related to React,
            Node.js, Express, MongoDB and Full Stack Development.
          </p>
        </div>

        {/* Videos */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Videos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{video.title}</h3>

                  <p className="text-gray-400 text-sm mt-2">
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

export default Profile;