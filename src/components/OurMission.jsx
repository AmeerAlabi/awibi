import React from "react";
import missionImage from "../assets/Images/story.png"; // Replace with the actual path to the mission image

const OurMission = () => {
  return (
    <section className="bg-[]  mt-[70px] p-[20px] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[black] mb-4">Our Mission</h2>
            <p className="text-[#666666] text-lg">
              AWIBI MedTech is dedicated to transforming healthcare delivery
              through innovative digital solutions. We empower health
              professionals with technology that enhances patient care and
              improves health outcomes across communities.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-64 md:h-96 object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;