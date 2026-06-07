import React from "react";

function Dashboard() {
  const stats = [
    {
      title: "Total Videos",
      value: 48,
      color: "bg-blue-600",
    },
    {
      title: "Subscribers",
      value: "12.5K",
      color: "bg-green-600",
    },
    {
      title: "Total Views",
      value: "250K",
      color: "bg-red-600",
    },
    {
      title: "Likes",
      value: "18K",
      color: "bg-purple-600",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "React Complete Tutorial",
      views: "12K views",
    },
    {
      id: 2,
      title: "Node.js Backend Project",
      views: "8K views",
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline",
      views: "15K views",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back, Devesh Kumar 👋
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-2xl p-6 shadow-lg`}
          >
            <h2 className="text-lg">{item.title}</h2>

            <p className="text-3xl font-bold mt-3">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl">
            Upload Video
          </button>

          <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl">
            Edit Profile
          </button>

          <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl">
            Analytics
          </button>
        </div>
      </div>

      {/* Recent Videos */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-5">
          Recent Videos
        </h2>

        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-zinc-900 p-5 rounded-xl flex items-center justify-between hover:bg-zinc-800 transition"
            >
              <div>
                <h3 className="font-semibold">
                  {video.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {video.views}
                </p>
              </div>

              <button className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;