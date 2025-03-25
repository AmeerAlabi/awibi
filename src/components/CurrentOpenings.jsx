import React from "react";
import { Link } from "react-router-dom";

const openings = [
  {
    title: "Senior Software Engineer",
    description: "5+ years healthcare software experience, React, Node.js, SQL/NoSQL",
    details: "Remote, Full-Time",
    link: "/careers/senior-software-engineer",
  },
  {
    title: "UX/UI Designer",
    description: "3+ years complex application design, accessibility expert",
    details: "Remote, Full-Time",
    link: "/careers/ux-ui-designer",
  },
  {
    title: "Database Specialist",
    description: "Data security expertise, MongoDB, SQL Server, HIPAA compliance",
    details: "Remote, Full-Time",
    link: "/careers/database-specialist",
  },
  {
    title: "QA Engineer",
    description: "Automated/manual testing, regression environment experience",
    details: "Remote, Full-Time",
    link: "/careers/qa-engineer",
  },
  {
    title: "EHR Implementation Lead",
    description: "Healthcare IT experience, project management",
    details: "Remote, Full-Time",
    link: "/careers/ehr-implementation-lead",
  },
  {
    title: "Training Specialist",
    description: "Adult education experience, content development skills",
    details: "Remote, Full-Time",
    link: "/careers/training-specialist",
  },
];

const CurrentOpenings = () => {
  return (
    <section className="bg-[white] py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#267AFF] text-center mb-12">
          Current Openings
        </h2>

        {/* Openings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {openings.map((opening, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              {/* Opening Title */}
              <h3 className="text-xl font-bold text-[#18181B] mb-3">
                {opening.title}
              </h3>

              {/* Opening Description */}
              <p className="text-[#666666] mb-2">{opening.description}</p>

              {/* Remote and Full-Time Details */}
              <p className="text-[#999999] text-sm mb-4">{opening.details}</p>

              {/* Apply Now Button */}
              <Link to={opening.link}>
                <button className="flex items-center bg-[#267AFF] text-white px-4 py-2 rounded-lg hover:bg-[#1e6ad1] transition">
                  <span className="mr-2 font-semibold">Apply now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;