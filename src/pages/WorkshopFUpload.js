import { MdOutlineVerified } from "react-icons/md"; 
import { BsFillCloudUploadFill } from "react-icons/bs"; 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const WorkshopFUpload = () => {
  return (
    <section className="bg-customc lg:pb-20">
    <Header />
    <div className="flex justify-center items-center">
      <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
        <h1 className="text-2xl font-medium py-4">Upload Image of Workshop</h1>
        <div className="bg-customB p-4 rounded-md">
        <h3 className=" text-left text-base font-bold my-3">Upload Images of the Workshop (Optional)</h3>

    {/* upload box */}
    
      <div>
          {/* upload card */}
          <div className=" bg-white p-6 w-full py-10 flex flex-col gap-6  items-center justify-center text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500">
              <BsFillCloudUploadFill className=" w-20 h-20 text-yellow-500" />
              <p className=" text-xs font-normal text">Click here to browse computer, or drag and drop to upload image</p>
            <p  className=" text-xs font-normal text">(Only JPEG, JPG, and PNG files are supported. Maximum file size is 5MB)</p>
          </div>
        </div>

       

     <p className=" text-sm font-bold text-left my-2">Tips for your station to get approved</p>
    <div className="flex flex-col text-left lg:flex-row gap-3 lg:items-center mb-8">
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">A full landscape picture capturing teh affected spot in the car</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Ensure it is very clear/not blurry</p>
    </div>
    </div>
        </div>

        {/* Submit Button */}
        <section className=" my-8">
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center w-full">
    <button className="flex items-center justify-center gap-2 lg:w-1/2 py-2 rounded-md bg-red-800     text-white  text-sm   font-semibold w-full " >skip</button>
    <button className="flex items-center justify-center gap-2 lg:w-1/2 py-2 rounded-md bg-indigo-900   text-white  text-sm  font-semibold w-full" >Save and Continue</button>
    </div>
</section>
      </div>
    </div>
  </section>
  )
}

export default WorkshopFUpload