import React from "react";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <FiClock className="text-blue-600 text-6xl animate-bounce mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-[#050829]">
        Coming Soon!
      </h1>
      <p className="text-lg text-gray-600 mt-3 max-w-md">
        We're working hard to bring you this page. Stay tuned for updates!
      </p>
      <Link to="/" className="mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ComingSoon;
