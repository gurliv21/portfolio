import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-gray-700">
      <div className="flex justify-between items-center p-14  px-16 md:px-16">
        {/* Logo */}
        <button>
          <Link to="/">
            <i className="fa-solid fa-snowflake text-3xl "></i>
          </Link>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-6 font-semibold">
          <Link to="/about" className="hover:text-[#074799] transition-colors">
            About
          </Link>
          <Link to="/projects" className="hover:text-[#074799] transition-colors">
            Projects
          </Link>
          <button className="hover:text-[#074799] transition-colors">Contact</button>
          <button>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-[#001A6E] focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <Link
            to="/about"
            className="hover:text-[#074799] transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-[#074799] transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <button
            className="hover:text-[#074799] transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </button>
          <button>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
