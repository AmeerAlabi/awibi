import React from 'react'
import career from '../assets/Images/career.png'
import car from '../assets/Images/car.png'

const Career = () => {
  return (
    <div>
        <img src={career} alt="" className=" w-full " />

<div className=" p-[30px] mt-[70px] ">
        <h1 className=" text-[48px] font-[600] text-[#050829] mb-[30px]  ">Join Our Mission</h1>
        <p className=" text-[20px] text-[#333333] font-[400] mb-[30px] ">At AWIBI MedTech Foundation, we're more than just a healthcare technology provider—we're pioneers transforming how care is delivered across communities. Our team is driven by purpose and innovation, working to create meaningful impact through our electronic health record system and digital healthcare solutions.</p>
        <img src={car} alt="" className="" />
        </div>
      
    </div>
  )
}

export default Career
