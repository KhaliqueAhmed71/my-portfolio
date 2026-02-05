import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Khalique.dev
          </h2>
          <p className="text-sm mt-1">Frontend Developer | React & Tailwind CSS</p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-base font-medium text-center">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl mt-4 md:mt-0">
          <a href="https://github.com/KhaliqueAhmed71" target="_blank" rel="noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/khalique" target="_blank" rel="noreferrer" className="hover:text-blue-700 dark:hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/khalique" target="_blank" rel="noreferrer" className="hover:text-blue-500 dark:hover:text-blue-300 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Khalique Ahmed. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
