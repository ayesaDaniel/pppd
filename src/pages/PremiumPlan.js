import { GiCutDiamond } from "react-icons/gi"; 
import { BsFillCloudUploadFill } from "react-icons/bs"; 
import React, { useState } from "react";
import Header from "../layout/Header";
import { MdOutlineVerified } from "react-icons/md";


const PremiumPlan = () => {
  return (
    <section className="bg-customc lg:pb-40 ">
    <Header />
    <div className="flex justify-center items-center">
      <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
        <h1 className="text-2xl font-medium py-4">Available Premium Plans</h1>
        
        <h3 className=" text-center text-base font-bold my-6">Choose one of the available packages below to enjoy premium features</h3>

    {/* upload box */}
     <div className=" flex flex-col lg:flex-row gap-8 my-6">
    
         
          {/* Premuim card */}
          <div className=" bg-red-100  p-6 py-10 flex flex-col gap-6  items-center justify-center text-center border-2 border-red-200 rounded-lg cursor-pointer">
             <h4 className=" text-red-950 font-medium  text-lg ">Monthly Plan</h4>
              <GiCutDiamond  className=" w-20 h-20 text-red-950  "/>
              <h4 className=" text-black font-medium  text-lg ">N1,000/Month</h4>
              <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Unlimited access to use all platform filters for 30 days</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Verification Badge attached to user review</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Contact and Cadre view</p>
    </div>

    <button className="flex items-center justify-center gap-2 py-2 rounded-md bg-red-800 text-white  text-sm font-semibold w-full " >Proceed</button>
          </div>
       
         {/* premuim card */}
         <div className=" bg-indigo-100  p-6 py-10 flex flex-col gap-6  items-center justify-center text-center border-2 border-indigo-200 rounded-lg cursor-pointer">
             <h4 className=" text-indigo-900 font-medium  text-lg ">Monthly Plan</h4>
              <GiCutDiamond  className=" w-20 h-20 text-indigo-900  "/>
              <h4 className=" text-black font-medium  text-lg ">N10,000/Annum</h4>
              <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Unlimited access to use all platform filters for 30 days</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Verification Badge attached to user review</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Contact and Cadre view</p>
    </div>

    <button className="flex items-center justify-center gap-2 py-2 rounded-md bg-indigo-900 text-white  text-sm font-semibold w-full " >Proceed</button>
          </div>
       
     </div>

     

       
      </div>
    </div>
  </section>
  )
}

export default PremiumPlan