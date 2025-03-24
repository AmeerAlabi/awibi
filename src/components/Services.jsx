import React from "react";
import { FaClipboardList, FaLayerGroup, FaUsers } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaClipboardList className="text-white text-[24px]" />,
    title: "Electronic Health Record",
    description:
      "Our flagship EHR platform provides healthcare professionals with seamless access to patient information, enabling better clinical decision-making and improved care coordination.",
    background: "#34C759", // Green
  },
  {
    id: 2,
    icon: <FaLayerGroup className="text-white text-[24px]" />,
    title: "Technology Infrastructure Development",
    description:
      "We equip medical practitioners with tools and training to maximize the benefits of digital healthcare. Our comprehensive technological training program accommodates all levels of technological proficiency.",
    background: "#FF6F61", // Pink
  },
  {
    id: 3,
    icon: <FaUsers className="text-white text-[24px]" />,
    title: "Community Health Initiatives",
    description:
      "We believe technology should serve everyone in the community, regardless of location or resources. Our mobile health units bring digital healthcare solutions directly to remote areas.",
    background: "#335CF4", // Blue
  },
];

const Services = () => {
  return (
    <section className="p-[20px] pb-[80px]  bg-[#F5F9FF]">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-sm p-3 uppercase font-semibold text-[#335CF4] mb-4">
          Our Services
        </h2>
        <p className="text-[#18181B] p-5
         font-extrabold text-5xl max-w-3xl mx-auto mb-12 bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text ">
          <span className="bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text">Innovative</span> Health Solutions for a Better Tomorrow
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 mt-[70px] md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start text-left p-6 rounded-lg"
              style={{ backgroundColor: service.background }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-white/90 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;