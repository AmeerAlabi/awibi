import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../assets/Images/blog.png'
import { Link } from "react-router-dom";

// Sample blog data (replace with your actual data)
const blogs = [
  {
    id: 1,
    image:img1, // Replace with your image URL
    date: "October 10, 2023",
    title: "The Future of Technology in Business",
    description:
      "Discover how emerging technologies are transforming the business landscape and what it means for your company.",
  },
  {
    id: 2,
    image:img1, // Replace with your image URL
    date: "October 5, 2023",
    title: "Top Marketing Trends for 2024",
    description:
      "Explore the latest marketing trends that will dominate 2024 and how you can leverage them for your business.",
  },
  {
    id: img1,
    image:img1, // Replace with your image URL
    date: "September 28, 2023",
    title: "Sustainable Practices for Modern Businesses",
    description:
      "Learn how businesses can adopt sustainable practices to reduce their environmental impact and improve profitability.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white mt-[30px] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-[#335CF4] mb-4">Latest in Health Tech</h2>
          <p className="text-[#666666]">Stay updated with the latest in our community,  Here are the latest headlines:</p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-3 lg:grid-cols-3 gap-[40px]">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white overflow-hidden">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full hover:scale-110 h-48 object-cover"
              />

              {/* Blog Content */}
              <div className=" mt-[15px] w-full  ">
                {/* Date */}
                <p className="text-sm text-[#666666] mb-2">{blog.date}</p>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-4">{blog.title}</h3>

                {/* Description */}
                <p className="text-[#666666] mb-6">{blog.description}</p>

                {/* Read More Button */}
                <Link>
 <div className="flex items-center text-[#335CF4] hover:text-[#2b4dc4] transition">
                  <span className="mr-2 font-semibold">Read More</span>
                  <FaArrowRight />
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    </section>
  );
};

export default BlogSection;