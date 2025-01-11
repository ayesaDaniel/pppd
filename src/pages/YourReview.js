import { MdDelete } from "react-icons/md"; 
import { AiFillEdit } from "react-icons/ai"; 
import React, { useState } from 'react'
import Header from '../layout/Header'
import { BsFillStarFill } from "react-icons/bs"; 

const YourReview = () => {

    let imgSrc = process.env.PUBLIC_URL;

  return (
     <div className='bg-customc lg:pb-20 '>
    <Header/>

<div className=' flex justify-center items-center'>

<div className=' max-w-customD max-h-heightD bg-white rounded-md p-8 md:px-12 px-4  '>
         <h1 className=' text-2xl font-medium py-2 text-center '>Reviews And  Ratings</h1>

        {/* Review boxes */}
        <section className=" my-6">
    <div className=" border border-gray-300 p-4 rounded-md">

       <div className="flex items-center justify-between mb-4">

       <div className=" flex items-center gap-1">
<div className="z-10"><img src={`${imgSrc}/img/Frame 1984077875.png`}  className=" object-cover" /></div>
    <p>Chuks Emeka</p>
        </div>

        <div className=" flex items-center gap-1 ">
        <AiFillEdit />
        </div>

       </div>

        <div className="flex gap-1 my-4">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <span>12/10/2024</span>
        </div>

        <p className=" text-xs font-medium text-left my-4">
        I had an outstanding experience with Peter, who went above and beyond to fix my car. His expertise and attention to detail were 
        evident from the moment he diagnosed the issue, and he explained every step 
        of the process in a way that was easy to understand. Not only did he complete the repairs efficiently, but he also took the time to ensure everything was running perfectly before returning the car. Hardy’s professionalism, honesty, and dedication to quality workmanship make him a truly exceptional mechanic. I highly recommend his services to anyone in need of reliable and skilled car repairs!I had an outstanding experience with Peter, who went above and beyond to fix my car. His expertise and attention to detail were evident from the moment he diagnosed the issue, and he explained every step of the process in a way that was easy to understand. Not only did he complete the repairs efficiently, but he also took the time to ensure everything was running perfectly before returning the car. Hardy’s professionalism, honesty, and dedication to quality workmanship make him a truly exceptional mechanic. I highly recommend his services to anyone in need of reliable and skilled car repairs!
        </p>

    </div>
</section>
        {/* Review boxes */}
        <section className=" my-6">
    <div className=" border border-gray-300 p-4 rounded-md">

       <div className="flex items-center justify-between mb-4">

       <div className=" flex items-center gap-1">
<div className="z-10"><img src={`${imgSrc}/img/Frame 1984077875.png`}  className=" object-cover" /></div>
    <p>Chuks Emeka</p>
        </div>

        <div className=" flex items-center gap-1 ">
        <AiFillEdit />
        <MdDelete />
        </div>

       </div>

        <div className="flex gap-1 my-4">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <span>12/10/2024</span>
        </div>

        <p className=" text-xs font-medium text-left my-4">
        I had an outstanding experience with Peter, who went above and beyond to fix my car. His expertise and attention to detail were 
        evident from the moment he diagnosed the issue, and he explained every step 
        of the process in a way that was easy to understand. Not only did he complete the repairs efficiently, but he also took the time to ensure everything was running perfectly before returning the car. Hardy’s professionalism, honesty, and dedication to quality workmanship make him a truly exceptional mechanic. I highly recommend his services to anyone in need of reliable and skilled car repairs!I had an outstanding experience with Peter, who went above and beyond to fix my car. His expertise and attention to detail were evident from the moment he diagnosed the issue, and he explained every step of the process in a way that was easy to understand. Not only did he complete the repairs efficiently, but he also took the time to ensure everything was running perfectly before returning the car. Hardy’s professionalism, honesty, and dedication to quality workmanship make him a truly exceptional mechanic. I highly recommend his services to anyone in need of reliable and skilled car repairs!
        </p>

    </div>
</section>
        {/* Review boxes */}
        <section className=" my-6">
    <div className=" border border-gray-300 p-4 rounded-md">

       <div className="flex items-center justify-between mb-4">

       <div className=" flex items-center gap-1">
<div className="z-10"><img src={`${imgSrc}/img/Frame 1984077875.png`}  className=" object-cover" /></div>
    <p>Chuks Emeka</p>
        </div>

        <div className=" flex items-center gap-1 ">
        <AiFillEdit />
        <MdDelete />
        </div>

       </div>

        <div className="flex gap-1 my-4">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <span>12/10/2024</span>
        </div>

        <p className=" text-xs font-medium text-left my-4">
        I had an outstanding experience with Peter, who went above and beyond to fix my car. His expertise and attention to detail were 
        evident from the moment he diagnosed the issue, and he explained every step 
        of the process in a way that was easy to understand. Not only did he complete the repairs efficiently, but he also took the time to ensure everything was running perfectly before returning the car. Hardy’s professionalism, honesty, and dedication to quality workmanship make him a truly exceptional mechanic. I highly recommend his services to anyone in need of reliable and skilled car repairs!I had an outstanding experience with Peter, who went above and beyond to fix my car. His expertise and attention to detail were evident from the moment he diagnosed the issue, and he explained every step of the process in a way that was easy to understand. Not only did he complete the repairs efficiently, but he also took the time to ensure everything was running perfectly before returning the car. Hardy’s professionalism, honesty, and dedication to quality workmanship make him a truly exceptional mechanic. I highly recommend his services to anyone in need of reliable and skilled car repairs!
        </p>

    </div>
</section>
      
           {/* Button area.... */}

<section className=" my-8">
    <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
    <button className="flex items-center justify-center gap-2 lg:w-1/2 py-2 rounded-md bg-DarkGreen   text-white  text-sm   font-semibold w-full " ><div class="z-10"><img src={`${imgSrc}/img/Vector (1).png`} alt="My Image" /></div><span className=" ">Write a Review</span></button>
    <button className="flex items-center justify-center gap-2 lg:w-1/2 py-2 rounded-md bg-indigo-900   text-white  text-sm  font-semibold w-full" ><div class="z-10"><img src={`${imgSrc}/img/gg_profile.png`} alt="My Image" /></div><span className=" ">GO TO PROFILE</span></button>
    </div>
</section>
     </div>



</div>

</div>
  )
}

export default YourReview