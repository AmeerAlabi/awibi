import React from "react";
import img1 from '../assets/Images/cont.png'

const Contact = () => {
  return (
    <div className="flex mt-[100px] flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 bg-white">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-8 rounded-lg ">
        <h2 className="text-[32px] font-bold text-gray-800 ">Get in Touch</h2>
        <p className=" text-[16px] font-[400] mb-6 ">Our friendly team would love to hear from you.</p>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-[#BDBDBD] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-[#BDBDBD] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-[#BDBDBD] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-[#BDBDBD] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 border border-[#BDBDBD] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-[2px] font-bold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Image */}
      <div className="w-full  md:w-1/2">
        <img
          src={img1}
          alt="Contact"
          className="w-full rounded-lg h-[500px] bg-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default Contact;
