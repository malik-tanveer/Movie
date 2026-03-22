import React from "react";
import { FaTheaterMasks, FaGlobe, FaFilm, FaHeart, FaTv, FaTrophy, FaStar } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-4">
          About <span className="text-yellow-400">Dramas</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Discover powerful storytelling from around the world. From emotional
          journeys to thrilling plots — we bring everything in one place.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Why Watch */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Why Watch Dramas?
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <FaTheaterMasks className="text-yellow-400" /> Engaging Storylines
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe className="text-yellow-400" /> Cultural Exploration
            </li>
            <li className="flex items-center gap-3">
              <FaFilm className="text-yellow-400" /> High-Quality Production
            </li>
            <li className="flex items-center gap-3">
              <FaHeart className="text-yellow-400" /> Emotional Connections
            </li>
          </ul>
        </div>

        {/* Collection */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Our Collection
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <FaTv className="text-yellow-400" /> Trending Dramas
            </li>
            <li className="flex items-center gap-3">
              <FaTrophy className="text-yellow-400" /> Award Winners
            </li>
            <li className="flex items-center gap-3">
              <FaStar className="text-yellow-400" /> Fan Favorites
            </li>
            <li className="flex items-center gap-3">
              <MdMovie className="text-yellow-400" /> Hidden Gems
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 max-w-3xl text-center">
        <p className="text-gray-400 text-lg">
          We aim to deliver the best drama experience with a modern and clean
          platform. Sit back, explore, and enjoy your favorite content anytime.
        </p>
      </div>
    </div>
  );
};

export default About;