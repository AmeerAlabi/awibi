import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Company",
    review:
      "AwibiEHR is the future of digital healthcare. With the fast and secure health record system, patients' data will be more accessible and secure.",
    image: "path_to_image_1.jpg",
    stars: 5,
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, Another Company",
    review:
      "Awibi Medtech group has equipped students and professionals with skills and knowledge that will help in delivering innovative healthcare solutions. We are making a difference in health technology.",
    image: "path_to_image_2.jpg",
    stars: 4,
  },
  {
    name: "Robert Brown",
    role: "Founder, Startup Inc.",
    review:
      "Awibi healthtech institute and consultation has provided courses, workshops, and seminars to keep healthcare professionals ahead in the world of health technology.",
    image: "path_to_image_3.jpg",
    stars: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#EAF2FF] to-[#D2E1FA] py-16 overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23335CF4' fill-opacity='0.3' d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <p className="text-center text-lg font-semibold text-[#335CF4] mb-2 animate-fade-in">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 animate-fade-in bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text ">
          <span className=" bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text">
            What our clients
          </span>{" "}
          are saying
        </h2>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg p-6 rounded-xl border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center text-[#FFD700] mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 [filter:_drop-shadow(0_0_5px_rgba(255,215,0,0.5))]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Testimonial Image and Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-[#335CF4] shadow-md"
                />
                <div className="text-center">
                  <div className="font-semibold text-[#335CF4] text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;