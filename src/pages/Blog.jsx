import React from 'react'
import New from '../components/New'
import BlogSection from '../components/Blog'
import blog from '../assets/Images/blg.png'

const Blog = () => {
  return (
    <div className=' mt-[30px] '>
      <div className=" w-full ">
        <img src={blog} alt="" className=' w-full ' />
      </div>
      {/* <New /> */}
      <BlogSection />
    </div>
  )
}

export default Blog
