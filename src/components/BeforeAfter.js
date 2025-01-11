import React from 'react'
import { BsFillStarFill } from "react-icons/bs"; 

const BeforeAfter = () => {
    let imgSrc = process.env.PUBLIC_URL;
  return (
    <section className=" my-6">
    <div className=" border border-gray-300 p-4 rounded-md">
        <div className=" flex items-center gap-1 mb-4">
<div className="z-10"><img src={`${imgSrc}/img/Frame 1984077875.png`}  className=" object-cover" /></div>
    <p>Chuks Emeka</p>
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

        <div className=" flex flex-col lg:flex-row items-center gap-6 py-6 mt-6 border-t-4 border-t-gray-300">

            <div className=" w-full lg:w-auto">
                <h4 className=" mb-4">Before</h4>
                <div className="z-10"><img src={`${imgSrc}/img/Frame 1984078053.png`}  className=" object-cover w-full lg:w-auto" /></div>
            </div>

            <div className=" w-full lg:w-auto">
                <h4 className=" mb-4">After</h4>
                <div className="z-10"><img src={`${imgSrc}/img/Frame 1984078053.png`}  className=" object-cover w-full lg:w-auto" /></div>
            </div>

        </div>

    </div>
</section>

  )
}

export default BeforeAfter