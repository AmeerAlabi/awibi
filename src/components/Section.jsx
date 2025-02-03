import React from 'react';
import img from '../assets/Images/bg3.png'; // Correctly import the image

const OverlaySection = () => {
  return (
    <section className=" mt-[400px] relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${img})` }}>
      {/* Content */}
      <div className="absolute w-full h-[500px] inset-0 flex items-center justify-start px-8 md:px-24">
        {/* Text container with overlay */}
        <div 
              style={{ backgroundColor: 'rgba(38, 122, 255, 1)' }}
          className="relative  p-8  rounded-lg h-[400px] w-full ">
          {/* Text content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Your Title Here</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <button className="bg-[#267AFF] text-white px-8 py-3 rounded-lg hover:bg-[#1e6ad1] transition transform hover:scale-105">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverlaySection;