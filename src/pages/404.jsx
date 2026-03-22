import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-100">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
        <p className="mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition"
        >
          Go Back Home
        </Link>
      </main>

  
    </div>
  );
};

export default NotFound;