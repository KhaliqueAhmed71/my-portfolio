import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow p-5 flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-blue-400">My Portfolio</h1>
      <ul className="flex gap-8 text-xl font-semibold">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
