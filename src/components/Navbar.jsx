import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import log from "../assets/Images/log.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    ourCompany: false,
    aboutUs: false,
    services: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav className="bg-white text-[#333333] p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center md:justify-around justify-between ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={log} alt="Logo" className="w-[46px] h-[60px]" />
          <div className="text-[32px] font-bold">AWIBI</div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex items-center justify-around absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {/* Dropdown Links */}
          {[
            { name: "Our Company", items: ["Mission", "Team"], key: "ourCompany" },
            { name: "About Us", items: ["History", "Values"], key: "aboutUs" },
            { name: "Services", items: ["Web Dev", "Marketing"], key: "services" },
          ].map(({ name, items, key }) => (
            <li key={key} className="relative w-full md:w-auto">
              <button
                className="flex justify-between items-center w-full md:w-auto p-3 md:py-2 hover:text-[#335CF4]"
                onClick={() => toggleDropdown(key)}
              >
                {name} <FaChevronDown size={12} />
              </button>
              <ul
                className={`${
                  dropdownOpen[key] ? "block" : "hidden"
                } md:absolute bg-white text-[#333333] mt-2 w-full md:w-40 shadow-lg rounded-lg`}
              >
                {items.map((item) => (
                  <li key={item} className="p-5 hover:bg-gray-200">
                    <NavLink to={`/${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* Regular Links */}
          {["Careers", "Blog"].map((link) => (
            <li key={link} className="p-5 ">
              <NavLink
                to={`/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "text-[#335CF4] font-bold" : "hover:text-[#335CF4]"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}

          {/* Contact Us Button (Visible Only in Mobile Menu) */}
          <li className="p-3 text-center md:hidden">
            <NavLink
              to="/contact"
              className="block text-white bg-[#335CF4] px-4 py-2 rounded-md font-bold hover:bg-[#2b4dc4] transition"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Contact Us Button (Visible on Desktop) */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="text-white bg-[#015AD0] px-4 py-3 font-bold hover:bg-[#2b4dc4] transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
