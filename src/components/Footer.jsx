import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from "react-icons/fa";
import logo from "../assets/Images/log.png"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#002769] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Newsletter CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-[100px] mx-auto px-[50px] py-[20px] bg-[#267AFF] w-full md:w-[950px] rounded-2xl mb-[17px]">
          <p className="text-center md:text-left">
            <span className="font-[700]">Newsletter</span> <br /> Stay updated with the latest news and updates from AWIBI.
          </p>
          <form className="flex justify-center mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg bg-[#002769] text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[white] text-[#002769] px-6 py-2 rounded-r-lg hover:bg-[#2b4dc4] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* AWIBI Logo and Description */}
        <div className="flex flex-col justify-center items-center py-[45px] gap-3 px-[30px] md:px-[100px] mb-12 text-center md:text-left">
          <img src={logo} alt="AWIBI Logo" className="w-16 h-20 mb-4 mx-auto md:mx-0" />
          <p className="max-w-[900px] mx-auto md:mx-0">
            AWIBI is a leading company dedicated to providing innovative solutions and services to
            our clients worldwide. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, non aspernatur veniam architecto eveniet dicta ab expedita sint ex suscipit.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center px-[30px] md:px-[100px] gap-[10px] mb-12">
          <div className="flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2" />
            <span>info@awibi.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2" />
            <span>123 AWIBI Street, City, Country</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaFax className="mr-2" />
            <span>+123 456 7891</span>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-[30px] px-[30px] md:px-[100px] mb-12 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <a href="/mission" className="hover:text-[#335CF4]">Mission</a>
              </li>
              <li className="mb-2">
                <a href="/team" className="hover:text-[#335CF4]">Team</a>
              </li>
              <li className="mb-2">
                <a href="/history" className="hover:text-[#335CF4]">History</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="/contact" className="hover:text-[#335CF4]">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-[#335CF4]">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:text-[#335CF4]">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FAQ</h3>
            <ul>
              <li className="mb-2">
                <a href="/faq" className="hover:text-[#335CF4]">General Questions</a>
              </li>
              <li className="mb-2">
                <a href="/support" className="hover:text-[#335CF4]">Technical Support</a>
              </li>
              <li className="mb-2">
                <a href="/billing" className="hover:text-[#335CF4]">Billing Questions</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} AWIBI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
