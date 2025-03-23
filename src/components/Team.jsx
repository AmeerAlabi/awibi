import React from 'react';

// Placeholder images for team members (replace with actual image paths)
import person1 from '../assets/Images/ps.png';

const teamMembers = [
  { id: 1, name: 'John Doe', position: 'CEO', image: person1, social: 'https://linkedin.com/in/johndoe' },
  { id: 2, name: 'Jane Smith', position: 'CTO', image: person1, social: 'https://twitter.com/janesmith' },
  { id: 3, name: 'Alice Johnson', position: 'Lead Designer', image: person1, social: 'https://dribbble.com/alicejohnson' },
  { id: 4, name: 'Bob Brown', position: 'Marketing Head', image: person1, social: 'https://facebook.com/bobbrown' },
  { id: 5, name: 'Charlie Davis', position: 'Developer', image: person1, social: 'https://github.com/charliedavis' },
];

export default function Team() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
        <h2 className="text-[40px] font-bold text-[#335CF4] bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text mb-4">Meet the visionaries behind AWIBI</h2>
          <p className="text-l4g text-[#333333] max-w-2xl mx-auto  ">
          Behind every innovation, there is a team that dares to dream, build and transform.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {teamMembers.map((member) => (
            <a
              key={member.id}
              href={member.social}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[302px] h-[568px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {/* Person Image as Background */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Name and Position */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg opacity-90">{member.position}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
