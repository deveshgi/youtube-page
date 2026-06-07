import React from "react";

function TweetsPage() {
  const tweets = [
    {
      id: 1,
      author: "CodeWithDevesh",
      username: "@codewithdevesh",
      content:
        "🚀 Just uploaded a new React tutorial! Check it out and let me know your feedback.",
      likes: 124,
      comments: 18,
      createdAt: "2 hours ago",
    },
    {
      id: 2,
      author: "CodeWithDevesh",
      username: "@codewithdevesh",
      content:
        "🔥 Node.js Backend Project series is coming soon. Stay tuned!",
      likes: 220,
      comments: 42,
      createdAt: "Yesterday",
    },
    {
      id: 3,
      author: "CodeWithDevesh",
      username: "@codewithdevesh",
      content:
        "💻 Which technology do you want next? React, Next.js, or MongoDB?",
      likes: 180,
      comments: 65,
      createdAt: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Tweets
          </h1>

          <p className="text-gray-400 mt-2">
            Share updates with your subscribers
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium">
          Create Tweet
        </button>
      </div>

      {/* Tweets */}
      <div className="space-y-6">
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition"
          >
            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100"
                alt={tweet.author}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h2 className="font-semibold">
                  {tweet.author}
                </h2>

                <p className="text-gray-400 text-sm">
                  {tweet.username} • {tweet.createdAt}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="mt-5 text-gray-200 leading-7">
              {tweet.content}
            </p>

            {/* Actions */}
            <div className="flex gap-8 mt-6 text-gray-400">
              <button className="hover:text-red-500 transition">
                ❤️ {tweet.likes}
              </button>

              <button className="hover:text-blue-400 transition">
                💬 {tweet.comments}
              </button>

              <button className="hover:text-green-400 transition">
                🔄 Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {tweets.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-24">
          <span className="text-7xl">🐦</span>

          <h2 className="text-2xl font-semibold mt-5">
            No tweets yet
          </h2>

          <p className="text-gray-400 mt-2">
            Start sharing updates with your audience.
          </p>
        </div>
      )}
    </div>
  );
}

export default TweetsPage;