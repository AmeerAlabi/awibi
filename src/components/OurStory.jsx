import React from "react";
import missionImage from "../assets/Images/misn.png"; // Replace with the actual path to the mission image

const OurStory = () => {
  return (
    <section className="bg-[] mt-[30px] p-[0px] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-64 md:h-96 object-cover "                                        
            />
          </div>


          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[black] mb-4">Our Story</h2>
            <p className="text-[#666666] text-lg">
            Founded in 2021 with a vision to bridge the gap between healthcare and technology, AWIBI has grown from a small team of passionate innovators to a leader in digital health solutions. Our recent Mastercard funding marks a significant milestone in our journey to revolutionize electronic health record systems.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default OurStory;