import React from "react";

const features = [
  {
    title: "Patient-Centered Innovation",
    description:
      "We design every solution with patients at the center, ensuring our technology enhances the quality of care they receive while respecting privacy and security.",
  },
  {
    title: "Healthcare Professional Empowerment",
    description:
      "Our tools are built to integrate seamlessly into clinical workflows, reducing administrative burden and giving healthcare providers more time for what matters most—patient care.",
  },
  {
    title: "Community Impact",
    description:
      "We believe in healthcare equity. Our solutions are designed to work in diverse settings, from urban hospitals to remote clinics, ensuring quality care reaches all communities.",
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="bg-gray-100  border-b-[1px] border-gray-300   mt-[30px] py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#18181B] text-center mb-12">
          What Sets Us Apart
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white hover:border-[blue] border border-[#E5E7EB] rounded-lg p-6 shadow-sm"
            >
              {/* Feature Title */}
              <h3 className="text-xl font-bold text-[#18181B] mb-3">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-[#666666]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;