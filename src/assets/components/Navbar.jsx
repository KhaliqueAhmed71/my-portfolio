import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-400">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-lg font-medium bg-gray-800">
          <li><Link to="/" onClick={toggleMenu} className="block hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="block hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu} className="block hover:text-blue-400">Projects</Link></li>
          <li><Link to="/skills" onClick={toggleMenu} className="block hover:text-blue-400">Skills</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="block hover:text-blue-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
