import React from "react";
import missionImage from "../assets/Images/vis.png"; // Ensure this matches the image in the design
import { Link } from "react-router-dom";

const VisionMission = () => {
  return (
    <section className="container py-auto mx-auto px-6 py-20   flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={missionImage}
          alt="Healthcare professional"
          className="w-full h-[350px] object-contain rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        {/* Subheading */}
        <p className="text-sm uppercase text-[#4A4A4A] font-semibold mb-2">
          Who we are
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-[#18181B] mb-6">
          Our Mission & Vision
        </h2>

        {/* Mission Section */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#18181B]">
            Mission:
          </h3>
          <p className="text-[#4A4A4A] mt-2 leading-relaxed">
            Using technology to spark healthcare innovation and empower people to transform healthcare across Africa.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#18181B]">
            Vision:
          </h3>
          <p className="text-[#4A4A4A] mt-2 leading-relaxed">
            A future where health technology drives better care, stronger communities, and real impact for Africans everywhere.
          </p>
        </div>

        {/* Learn More Link */}
        <Link to="/about-us">
          <button className="flex items-center gap-2 text-[#267AFF] font-semibold hover:text-[#1e6ad1] transition">
            Learn more about us →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default VisionMission;