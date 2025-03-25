import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // Using react-icons for social icons
import logo from "../assets/Images/log.png"; // Replace with your logo path
import footerBg from "../assets/Images/log.png"; // Replace with the path to the footer image you provided

const Footer = () => {
  return (
    <footer
      className="bg-[#002769] text-white py-12"
      style={{
        // backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* AWIBI Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left bg-transparent">
            <div className="flex items-center mb-4">
              <img src={logo} alt="AWIBI Logo" className="w-12 h-12 mr-2" />
              <h2 className="text-3xl font-bold">Awibi</h2>
            </div>
            <p className="max-w-xs">
              At Awibi, we believe Africa deserves good and standard healthcare. Let us be your partner in healthcare innovation!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left bg-transparent">
            <h3 className="font-bold mb-4 uppercase">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/home" className="hover:text-[#335CF4]">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-[#335CF4]">About us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-[#335CF4]">Services</a>
              </li>
              <li className="mb-2">
                <a href="/career" className="hover:text-[#335CF4]">Career</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:text-[#335CF4]">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-[#335CF4]">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:text-[#335CF4]">Terms</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left bg-transparent">
            <h3 className="font-bold mb-4 uppercase">Social</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://linkedin.com" className="hover:text-[#335CF4]">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-[#335CF4]">
                  <FaTwitter size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left bg-transparent">
            <h3 className="font-bold mb-4 uppercase">Help</h3>
            <p className="mb-2">Contact us</p>
            <a href="mailto:admin@awibi.com" className="hover:text-[#335CF4]">
              admin@awibi.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 bg-transparent">
          <p>© Copyright 2025, All Rights Reserved by AWIBI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;