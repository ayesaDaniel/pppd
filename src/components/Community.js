// src/components/Community.js
import React from 'react';
import Button from './buttons/Button';
import { Link } from 'react-router-dom';

function Community() {

  let imgSrc = process.env.PUBLIC_URL;
  
  return (

    <div className='py-12 px-6  md:text-left md:px-20'>
        <h2 className="text-2xl font-semibold text-left text-gray-800 md:text-3xl mb-10">Join Our Community</h2>
        <section className="flex flex-col w-full items-center  text-center md:flex-row  md:text-left">
      <div className="z-10 lg:w-1/2 "><img src={`${imgSrc}/img/Frame 1984077815.png`}  className=" object-cover" /></div>
      <div className=" lg:w-1/2 mt-4 md:mt-0 md:ml-12">
        <p className="my-10 text-gray-600 text-sm md:text-base">
        Do you own a vehicle, do you know highly skillful and trustworthy auto-repairers that may benefit other vehicle owners like you?
         Join us today and share your experience with other community members.
        </p>  
        <Link to="/started">   
  <Button
       text="Join us today!"
       style={"px-8 py-2 text-white bg-indigo-900 rounded-3xl sm:w-full lg:w-auto "}
       />
       </Link>
      </div>
    </section>
    </div>
   
  );
}

export default Community;
