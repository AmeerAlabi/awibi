import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import log from "../assets/Images/log.png"; // Ensure this matches the logo in the design

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Careers", link: "/careers" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <nav className="bg-white text-[#1A1A1A] fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={log}
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-bold">Awibi</span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"
          } overflow-y-auto md:overflow-visible`}
        >
          {navItems.map(({ title, link }) => (
            <li key={title} className="px-4 py-3">
              <NavLink
                to={link}
                className="text-base font-medium text-[#1A1A1A]"
              >
                {title}
              </NavLink>
            </li>
          ))}

          {/* Contact Us Button (Mobile) */}
          <li className="px-4 py-3 md:hidden">
            <NavLink
              to="/contact"
              className="block w-full text-center text-white bg-[#335CF4] px-6 py-2 rounded-md font-semibold hover:bg-[#2b4dc4] transition-colors duration-200"
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        {/* Contact Us Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="text-white bg-[#335CF4] px-6 py-2 rounded-md font-semibold hover:bg-[#2b4dc4] transition-all duration-200"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;