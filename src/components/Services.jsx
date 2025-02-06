import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className=" text-[#335CF4] text-[24px] " />,
    title: "Web Development",
    description: "Building fast and scalable web applications tailored to your needs.",
    link: "#",
  },
  {
    id: 2,
    icon: <FaPaintBrush className="text-[#335CF4] text-[24px] " />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with modern design principles.",
    link: "#",
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-[#335CF4] text-[24px]  " />,
    title: "Mobile App Development",
    description: "Developing responsive and user-friendly mobile applications.",
    link: "#",
  },
  // {
  //   id: 4,
  //   icon: <FaServer className="text-[#335CF4] text-[24px]" />,
  //   title: "Backend Development",
  //   description: "Building secure and efficient server-side applications and APIs.",
  //   link: "#",
  // },
  // {
  //   id: 4,
  //   icon: <FaServer className="text-[#335CF4] text-[24px]" />,
  //   title: "Backend Development",
  //   description: "Building secure and efficient server-side applications and APIs.",
  //   link: "#",
  // },
  // {
  //   id: 4,
  //   icon: <FaServer className="text-[#335CF4] text-[24px]" />,
  //   title: "Backend Development",
  //   description: "Building secure and efficient server-side applications and APIs.",
  //   link: "#",
  // },

];

const Services = () => {
  return (
    <section className="py-16  bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-[16px] font-bold text-[#335CF4] mb-4">Our Services</h2>
        <p className="text-black font-[700] text-[36px] max-w-2xl mx-auto mb-10">
        Innovative Health Solutions for a Better Tomorrow
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
  {services.map((service) => (
    <div 
      key={service.id} 
      className="bg-white border-[1.5px] border-[#CBD5E1] py-[30px] flex flex-col items-start text-left p-6 rounded-[18px] shadow-lg hover:shadow-2xl transition w-full md:w-[380px]"
    >
      {/* Icon */}
      <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#EAF2FF] rounded-full mb-4">
        {service.icon}
      </div>
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      {/* Description */}
      <p className="text-gray-600 mb-4">{service.description}</p>
      {/* Learn More Link */}
      <a href={service.link} className="text-[#267AFF] font-semibold hover:underline">
        Learn More →
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;
