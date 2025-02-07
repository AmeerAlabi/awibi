import React from 'react';

const Stats = () => {
  return (
    <div className="mt-10 mb-16 px-6">
      <div className="text-3xl md:text-4xl font-bold text-[#335CF4] text-center mb-6">
        Our Impact So Far
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#050829]">20,000+</h1>
          <p className="text-lg md:text-xl text-[#333333]">Patients Helped</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#050829]">120k+</h1>
          <p className="text-lg md:text-xl text-[#333333]">Community Members</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#050829]">8+</h1>
          <p className="text-lg md:text-xl text-[#333333]">African Countries Reached</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
