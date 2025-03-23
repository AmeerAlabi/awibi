import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from '../assets/Images/blog.png'

const blogs = [
  {
    id: 1,
    image:img1, 
    date: "12 Dec, 2024",
    title: "AI Applications in Medical Diagnostics",
    description:
      "In today’s healthcare landscape, AI-powered diagnostic tools are revolutionizing how clinicians identify and treat conditions.",
  },
  {
    id: 2,
    image: img1 , 
    date: "12 Dec, 2024",
    title: "The Role of Remote Patient Monitoring in Modern Healthcare",
    description:
      "In today’s healthcare landscape, AI-powered diagnostic tools are revolutionizing how clinicians identify and treat conditions.",
  },
  {
    id: 3,
    image: img1 ,
    date: "12 Dec, 2024",
    title: "Personalized Medicine: The Intersection of Data and Patient Care",
    description:
      "The era of one-size-fits-all medicine is giving way to treatment approaches tailored to individual patient characteristics.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className=" bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text text-4xl md:text-5xl font-extrabold mb-4  ">
            Latest in Health Tech
          </h2>
          <p className="text-[#666666] text-lg">
            Stay updated with the latest on our blog, Here are the latest headlines:
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Blog Content */}
              <div className="p-4">
                {/* Date */}
                <p className="text-sm text-[#666666] mb-2">{blog.date}</p>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#18181B] mb-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] mb-4">{blog.description}</p>

                {/* Read More Button */}
                <Link to={`/blog/${blog.id}`}>
                  <div className="flex items-center text-[#267AFF] hover:text-[#1e6ad1] transition">
                    <span className="mr-2 font-semibold">Read more</span>
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