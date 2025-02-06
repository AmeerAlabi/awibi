import React from 'react'

const Stats = () => {
  return (
    <div className=' mt-[20px] mb-[40px] '>
      <div className=" text-[40px] font-[700] text-[#335CF4] text-center mb-[10px] ">Our Impact So Far</div>
      <div className=" flex justify-center gap-[70px]  mt-[20px] items-center ">
        <div className=" flex flex-col items-center justify-center ">
            <h1 className=" text-[52px] font-[700] text-[#050829] ">20,000+</h1>
            <p className="  text-[16px] font-[400] text-[#333333] ">Patients Helped </p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
            <h1 className=" text-[52px] font-[700] text-[#050829] ">120k+</h1>
            <p className="  text-[16px] font-[400] text-[#333333] ">Community Members  </p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
            <h1 className=" text-[52px] font-[700] text-[#050829] ">8+</h1>
            <p className="  text-[16px] font-[400] text-[#333333] ">African countries
            reached </p>
        </div>
      </div>
    </div>
  )
}

export default Stats
