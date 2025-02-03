import React from 'react';
import missionImage from '../assets/Images/bg3.png'; // Replace with actual image
import { Link } from 'react-router-dom';

const VisionMission = () => {
  return (
    <section className="container mt-[60px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={missionImage} alt="Our Mission" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-[black] mb-6">Our Mission & Vision</h2>

        {/* Mission Section */}
        <div className="mb-8">
          <h3 className="text-[16px] font-semibold text-[#18181B]">Mission</h3>
          <p className="text-gray-700 mt-2">
            Our mission is to empower individuals and organizations with innovative solutions, driving positive change in society.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-8">
          <h3 className="text-[16px] font-semibold text-[#18181B]">Vision</h3>
          <p className="text-gray-700 mt-2">
            We envision a future where technology and innovation bridge gaps and create sustainable solutions for a better world.
          </p>
        </div>

        {/* Name & Role */}
        <div className="mb-6">
          <p className="font-bold text-lg">John Doe</p>
          <p className="text-gray-500">Founder & CEO</p>
        </div>

        {/* Learn More Button */}
        <Link>
        <button className="flex cursor-pointer items-center gap-2 text-[#267AFF] font-semibold hover:text-[#1e6ad1] transition">
          Learn More →
        </button>
        </Link>
      </div>
    </section>
  );
};

export default VisionMission;
