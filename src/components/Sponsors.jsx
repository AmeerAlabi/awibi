import React from "react";
import sponsor1 from "../assets/Images/forb.png";
import sponsor2 from "../assets/Images/giz.png";
import sponsor3 from "../assets/Images/bloom.png";
import sponsor4 from "../assets/Images/crunch.png";
// import sponsor5 from "../assets/Images/sponsor5.png";

const Sponsors = () => {
  return (
    <section className=" mt-[50px] bg-[#002769] py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}

        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {[sponsor1, sponsor2, sponsor3, sponsor4].map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={sponsor} 
                alt={`Sponsor ${index + 1}`} 
                className="w-40 md:w-48 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
