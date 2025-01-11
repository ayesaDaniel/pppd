import React from 'react';
import Button from './buttons/Button';
import { Link } from 'react-router-dom';

function Hero({image,altText}) {
    
  return (
    
    <section className="relative py-12 px-6 md:py-16">
      <div className="flex flex-col lg:flex-row w-full">
        {/* write up */}
      <div className=' lg:w-1/2 flex flex-col gap-4 text-start px-6'>
      <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
        Find and Review Your Trusted <span className="text-yellow-500">Auto-Repairer</span>
      </h1>
      <p className="mt-4 text-gray-600 font-medium text-sm md:text-base">
      Connect with skilled repair experts, read real reviews, and share your experience to help others find quality service they can count on.
      </p>
      <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
      <Link to="/review" >
      <Button
       text="Review A Repair Man"
       style={"px-8 py-2 text-white bg-indigo-900 rounded-3xl sm:w-full lg:w-auto "}
       />
      </Link>

  <Link to="/search">
  <Button
       text="Find a Repair Man"
       style={"px-8 py-2 text-indigo-900 border border-indigo-900 sm:w-full rounded-3xl"}
       />
  </Link>
  
      </div>

      </div>

      {/* img */}
      <div className="z-10 lg:w-1/2 justify-items-end hidden lg:block"><img src={image} alt={altText} className=" object-cover" /></div>

      </div>

      
    </section>
  );
}

export default Hero;
