import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img
            src="/logo1.png"
            alt="Tanveer Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/movies" className="hover:text-yellow-400 transition">
            Movies
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          {/* <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link> */}
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/malik-tanveer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/malik-tanveer-8bbaa13b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm mt-4">
        tanveer.dev © {new Date().getFullYear()}  all rights reserved
      </p>
    </footer>
  );
};

export default Footer;