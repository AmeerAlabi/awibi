import React from "react";
import img1 from "../assets/Images/bg3.png"; // Update with actual image path

const HealthcareSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center rounded-lg overflow-hidden shadow-lg relative">
        {/* Left Image with Overlay */}
        <div className="relative w-full h-full">
          <img 
            src={img1} 
            alt="Surgery Team" 
            className="w-full h-full object-cover"
          />
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>

        {/* Right Content */}
        <div className="bg-blue-600 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Transforming Healthcare with AwibiEHR
          </h2>
          <p className="text-lg mb-6">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-200 transition">
            Discover AwibiEHR
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
