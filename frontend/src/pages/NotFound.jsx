import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-red-500">404</h1>

        {/* Message */}
        <h2 className="text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-3 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Go Home
          </Link>

          <Link
            to="/dashboard"
            className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Optional Image/Icon */}
        <div className="mt-10">
          <span className="text-7xl">📺</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;