import React from "react";
import { FaStar } from "react-icons/fa";
import img from '../assets/Images/bg2.png'

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Company",
    review:
      "AWIBI has been instrumental in helping our business grow. Their professionalism and dedication are unmatched.",
    image: "path_to_image_1.jpg",
    stars: 5,
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, Another Company",
    review:
      "The team at AWIBI went above and beyond to help us reach our target audience. I highly recommend their services.",
    image: "path_to_image_2.jpg",
    stars: 4,
  },
  {
    name: "Robert Brown",
    role: "Founder, Startup Inc.",
    review:
      "I am impressed by how AWIBI helped us with our web development. Their attention to detail and expertise is exceptional.",
    image: "path_to_image_3.jpg",
    stars: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="container bg-[#D2E1FA21] mt-[0px] mx-auto px-6 py-16">
      {/* Header */}

      <p className="text-center text-[22px] font-[700] text-lg text-[black] ">
      Testimonials
      </p>
      <h2 className="text-[42px] font-bold mb-10  text-[#267AFF] text-center ">What our clients are saying</h2>

      {/* Background Image */}
      <div className="relative mb-16">
        <img
          src={img}
          alt="Background Image"
          className="w-full h-[500px] object-cover "
        />
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              {/* Review Text */}
              <p className="text-gray-600  text-center mb-4">"{testimonial.review}"</p>

              {/* Stars */}
              <div className="flex justify-center  text-yellow-500 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Testimonial Image */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className=" mt-[10px] " >
                  <div className=" text-center font-semibold text-[#335CF4]">{testimonial.name}</div>
                  <div className=" text-center text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
