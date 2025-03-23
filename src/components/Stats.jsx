import React, { useEffect, useState } from "react";

const Stats = () => {
  // State for counting animation
  const [patients, setPatients] = useState(0);
  const [community, setCommunity] = useState(0);
  const [countries, setCountries] = useState(0);

  // Counting animation effect
  useEffect(() => {
    const animateCount = (setValue, target, duration) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setValue(Math.floor(start));
      }, 50);
    };

    animateCount(setPatients, 20000, 2000); // 20,000+ patients
    animateCount(setCommunity, 120000, 2000); // 120k+ community members
    animateCount(setCountries, 8, 2000); // 8+ countries
  }, []);

  return (
    <div className="relative py-16 bg-[#F5F9FF] overflow-hidden">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5959]/10 to-[#335CF4]/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-3xl md:text-5xl font-extrabold text-center mb-12 animate-fade-in">
          <span className=" text-black bg-clip-text">
            Our Impact So Far
          </span>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center text-center">
          <div className="flex flex-col items-center  p-6 rounded-xl border border-transparent hover:border-gradient-to-r hover:from-[#FF5959] hover:to-[#335CF4]  hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text mb-2">
              {patients.toLocaleString()}+
            </h1>
            <p className="text-lg md:text-xl text-[#333333]">Patients Helped</p>
          </div>

          <div className="flex flex-col items-center  p-6 rounded-xl border border-transparent hover:border-gradient-to-r hover:from-[#FF5959] hover:to-[#335CF4]  hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text mb-2">
              {(community / 1000).toLocaleString()}k+
            </h1>
            <p className="text-lg md:text-xl text-[#333333]">Community Members</p>
          </div>

          <div className="flex flex-col items-center  p-6 rounded-xl border border-transparent hover:border-gradient-to-r hover:from-[#FF5959] hover:to-[#335CF4] hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text mb-2">
              {countries}+
            </h1>
            <p className="text-lg md:text-xl text-[#333333]">African Countries Reached</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;