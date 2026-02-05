import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-600 dark:text-blue-400 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gray-200 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Khalique<span className="text-blue-600">.</span>dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out
  ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
>
  <ul className="px-6 py-6 space-y-5 text-base bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">

    <NavLink onClick={() => setOpen(false)} to="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
      Home
    </NavLink>

    <NavLink onClick={() => setOpen(false)} to="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
      About
    </NavLink>

    <NavLink onClick={() => setOpen(false)} to="/projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
      Projects
    </NavLink>

    <NavLink onClick={() => setOpen(false)} to="/skills" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
      Skills
    </NavLink>

    <NavLink onClick={() => setOpen(false)} to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
      Contact
    </NavLink>

    {/* Divider */}
    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? <FiMoon /> : <FiSun />}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </div>

  </ul>
</div>

    </nav>
  );
}

export default Navbar;
