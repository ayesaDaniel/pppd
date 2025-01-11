import { BsFillStarFill } from "react-icons/bs"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { MdWorkspacePremium } from "react-icons/md"; 
import React, { useState } from 'react'
import Header from '../layout/Header'
import Button from '../components/buttons/Button';
import BeforeAfter from "../components/BeforeAfter";
import { Link } from "react-router-dom";

const AutoSpecialistProfile  = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  // Close the modal
  const closeModal = () => setModalOpen(false);

  // Handle modal close when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  // Toggle modal open/close state
  const toggleModal = () => setModalOpen((prev) => !prev);

    let imgSrc = process.env.PUBLIC_URL;

  return (
    <div className='bg-customc lg:pb-20 '>
    <Header/>

<div className=' flex justify-center items-center'>

<div className=' max-w-customD max-h-heightD bg-white rounded-md p-8 md:px-12 px-4  '>
         <h1 className=' text-2xl font-medium py-2 text-center '>Auto-Specialist Profile</h1>
   <p className=' text-left my-6'>Personal Details</p>

   <div className="z-10"><img src={`${imgSrc}/img/Frame 1984077403.png`}  className=" object-cover" /></div>

   <div className=" my-6">
    <span className='block text-black font-medium mb-1 text-left'>Full Name</span>
    <input type="name" name="name" id="name" placeholder="Peter park" required
             className=" w-full border border-gray-300 rounded-full px-6  p-2 focus:outline-none focus:border-indigo-900"
             disabled
            />

   </div>

   <div className=" flex gap-10 text-left w-full">

    <div className=" w-1/2 lg:w-auto"
       onClick={toggleModal}
    >
        <span>Phone Number</span>
        <Button
       text="Click to See"
       style={"px-8 py-2 text-white bg-indigo-900 rounded-3xl sm:w-full lg:w-auto "}
       />
    </div>

    <div className="w-1/2 lg:hidden">
        <span>Cadre</span>
     <button className="px-8 py-2 border border-gray-300 bg-white flex items-center gap-1  rounded-3xl sm:w-full lg:w-auto "><MdWorkspacePremium className=" text-yellow-500" /> Get premium</button>
    </div>

    <div className="hidden lg:block">
        <span>Cadre</span>
     <button className="px-8 py-2 border border-gray-300 bg-white flex items-center gap-1  rounded-3xl sm:w-full lg:w-auto "><MdWorkspacePremium className=" text-yellow-500" /> Get premium to see cadre</button>
    </div>

    <div className="hidden lg:block">
        <span>Years of Experience</span>
     <button className="px-8 py-2 border border-gray-300  bg-white flex items-center gap-1  rounded-3xl sm:w-full lg:w-auto "><MdWorkspacePremium className=" text-yellow-500" /> 10 Years</button>
    </div>

   </div>

   <div className=" text-left my-6 lg:hidden">
        <span>Years of Experience</span>
     <button className="px-8 py-2 border border-gray-300  bg-white flex items-center gap-1  rounded-3xl sm:w-1/2 lg:w-auto "><MdWorkspacePremium className=" text-yellow-500" /> 10 Years</button>
    </div>

   <p className=' text-left my-6'>Area of Expertise</p>

  <div className=" text-left w-1/2 lg:w-auto "
   onClick={toggleModal}
  >
  <Button
       text="Auto Mechanic"
       style={"px-8 py-2 border border-gray-300 bg-red-300 rounded-3xl sm:w-full lg:w-auto "}
       />
  </div>

 {/* Location */}
 <section className="mt-6">
 <h2 className="font-bold mb-2">Location</h2>
 <div className="relative w-full h-64 bg-gray-200">
   {/* Placeholder for map */}
   <span className="absolute top-4 right-4 bg-gray-700 text-white px-2 py-1 rounded">
     4km away
   </span>
 </div>
 <div className=" flex-col lg:flex lg:flex-row text-left  items-center gap-3 mt-3">
 <p className="mt-2 text-gray-600">
   12-16, Chief Herbert Ogunde Road, off JK Avenue, Victoria Island, Lagos
 </p>
 <button className="bg-white text-indigo-900 border border-indigo-900 rounded-full   px-4 py-2">
   View on map
 </button>
 </div>
</section>

    {/* Photos of Workshop (3) */}

    <section className="mt-6">

    <h1 className=" text-2xl font-semibold text-left mb-6">Photos of Workshop (3)</h1>
    <div className="flex gap-6">

    <div className="z-10"><img src={`${imgSrc}/img/Frame 1984077975.png`}  className=" object-cover" /></div>
    <div className="z-10"><img src={`${imgSrc}/img/Frame 1984077975.png`}  className=" object-cover" /></div>
    <div className="z-10 hidden lg:block"><img src={`${imgSrc}/img/Frame 1984077975.png`}  className=" object-cover" /></div>

    <div className="z-10 lg:hidden"><img src={`${imgSrc}/img/Frame 1984077982.png`}  className=" object-cover" /></div>
    
    </div>

    <button className="bg-white text-indigo-900 border border-indigo-900 rounded-full px-4 py-2 flex items-center gap-2 mt-6"><AiOutlinePlus /> Add more</button>

    </section>

    {/* Reviews */}
<section className="mt-6">
    <div>
        <div className="flex justify-between">
            <h1>Reviews and Ratings</h1>

            <a href="">View more</a>
        </div>
        <p className=" text-left my-6">The reviews and ratings you see on this profile are already verified and they 
        are from customers who have patronised the services of the profile owner.
        </p>

    <div className="flex w-full gap-2 items-center">

        <div className="w-4/12 text-left">
        <span className=" text-5xl font-bold text-left">4.5</span>
        <div className="flex gap-1 my-4">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <span>(26)</span>
        </div>
        </div>

        {/* Rating bars */}
        <div className="space-y-2 mt-4 w-8/12">
{Array.from({ length: 5 }, (_, index) => (
  <div className="flex items-center" key={index}>
    <span className="w-12 text-sm">{5 - index} star</span>
    <div className="flex-1 bg-gray-200 h-4 rounded-md overflow-hidden">
      <div
        className="bg-indigo-900 h-4"
        style={{ width: `${(5 - index) * 20}%` }}
      ></div>
    </div>
  </div>
))}
</div>

    </div>
    </div>
 
</section>


{/* Before and after */}
    <BeforeAfter/>
{/* Button area.... */}

<section className=" my-8">
    <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
    <button className="flex items-center justify-center gap-2 lg:w-1/2 py-2 rounded-md bg-DarkGreen   text-white  text-sm   font-semibold w-full " ><div class="z-10"><img src={`${imgSrc}/img/Vector (1).png`} alt="My Image" /></div><span className=" ">Write a Review</span></button>
    <button onClick={toggleModal} className="flex items-center justify-center gap-2 lg:w-1/2 py-2 rounded-md bg-indigo-900   text-white  text-sm  font-semibold w-full" ><div class="z-10"><img src={`${imgSrc}/img/Vector (3).png`} alt="My Image" /></div><span className=" ">CALL AUTO-SPECIALIST</span></button>
    </div>
</section>

     </div>



</div>

{/* Modal */}
<div>
        {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white w-11/12 flex flex-col items-center md:w-1/2 rounded-lg p-6 relative">
            {/* Modal Header */}
          
          <h2 className=" text-center text-2xl font-semibold my-6">You are almost there!</h2>

          <div className="z-10 my-6"><img src={`${imgSrc}/img/exclamation_14025462 1.png`}  className=" object-cover" /></div>
        
        <p className="my-6" >Create an account in order to have access to the feature you are trying to use.</p>
          
     <Link to="/started">
     <button className='px-8 py-2 text-white bg-indigo-900 rounded-lg w-full'>
             Create an account
              
             </button>
     </Link>
             <button className="my-6 underline text-blue-900 " onClick={closeModal}>Back</button>
          </div>
        </div>
      )}

    </div>


</div>
  )
}

export default AutoSpecialistProfile 






