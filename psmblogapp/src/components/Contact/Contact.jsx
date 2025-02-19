import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
<div className='min-h-screen flex justify-center items-center bg-black'>
    <div className="flex  flex-col max-h-auto mt-16 rounded-lg px-4 py-4 space-y-8 w-5xl bg-[#1A1A19]">
      <h1 className="text-3xl font-bold text-white">Contact</h1>
      <div className="relative h-[4px] w-[48px] rounded-xl  bg-blue-300"></div>

      <form action="/" className="flex flex-col space-y-6">
        <div className="flex flex-col  md:flex-row gap-4">
          <input
            type="text"
            id="userName"
            placeholder="Full Name"
            className=" w-full md:w-1/2 border-1 border-transparent focus:border-blue-300 outline-none  bg-[#262626] py-1 px-2 text-white font-semibold rounded-lg"
          />
          <input
            type="email"
            id="userEmail"
            placeholder="Enter Your Email"
            className=" w-full md:w-1/2 border-1 border-transparent focus:border-blue-300 outline-none  bg-[#262626] py-1 px-2 text-white font-semibold rounded-lg"
          />
        </div>

        <textarea
          placeholder="Your Message"
          id="ta1"
          className=" py-2 px-2 font-semibold text-white  w-full bg-[#262626] min-h-40 border-1 border-transparent focus:border-blue-300 outline-none rounded-lg"
        ></textarea>

        <Link className="w-fit relative   rounded-lg px-2 py-2 bg-[#1447E6] text-white hover:bg-blue-800 font-semibold   ">
          <button className="hover:cursor-pointer" >Send Messeage</button>
        </Link>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact
