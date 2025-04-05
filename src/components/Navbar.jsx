import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Aryan.dev</h1>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Regular anchor links */}
          <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all">Home</a>


          {/* NavLinks with active class */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all"
            }
          >
            Projects
          </NavLink>

          

          {/* Regular anchor link */}
          <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all">Contact</a>

          <DarkModeToggle />
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900">
          <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
          <a href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 font-semibold"
                : "block text-gray-700 dark:text-gray-300 hover:text-blue-500"
            }
          >
            Projects
          </NavLink>
          
          <a href="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
