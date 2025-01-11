import { IoIosCall } from "react-icons/io"; 
import { GoLocation } from "react-icons/go"; 
// src/components/Repairers.js
import React from 'react';

function Repairers() {

  let imgSrc = process.env.PUBLIC_URL;
  
  return (
    
    <section className="py-12 px-6 md:px-20" id="repairers">
      <h2 className="text-2xl font-semibold text-center text-gray-800 md:text-3xl">Our Top Rated Auto-Repairers</h2>
      <p className="text-center text-gray-600 my-6 text-sm md:text-base">Discover highly-rated professionals trusted by our community for reliable, expert auto care.</p>
      <div className="grid grid-cols-1 gap-6 lg:gap-x-16   mt-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {[...Array(9)].map((_, idx) => (
          <div key={idx} className="flex flex-col gap-2 text-left p-4  bg-white rounded-lg shadow-lg">
          {/* header card */}
           <div className=' flex gap-4'>
           <div className="z-10 "><img src={`${imgSrc}/img/Frame 1984077416.png`}  className=" object-cover" /></div>
           <div>
           <h3 className="text-lg font-semibold">Terry Philips</h3>
           <p className="text-sm text-gray-500">Repairer</p>
           </div>
           </div>

{/* address */}
            <div className='flex items-center text-center gap-1'>
            <GoLocation className=" text-orange-400" />
            <p className="mt-2 text-sm">12, Adeleke Close, Ajao Estate, Lagos</p>
            </div>
            {/* phone */}
            <div className="flex items-center gap-1">
                <IoIosCall />
                <p className="mt-2 text-sm ">+2345678943</p>
            </div>
           {/* stars */}

           <div className="flex justify-between">
           <div className="mt-2 text-green-500">★★★★★ (15)</div>
           <div className="mt-2 text-xs text-gray-500">Verification status ✅</div>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Repairers;
