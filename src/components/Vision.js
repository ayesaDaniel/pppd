import React from 'react';

function Vision({image}) {
  return (
     <div className=' py-4 px-6 md:text-left md:px-20' id='vision'>
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl text-start mb-6">Our Vision Statement</h2>
    
    <section className="flex flex-col w-full items-center text-center md:flex-row">
      <img src={image} alt="Our Vision" className="w-full md:w-1/2" />
      <div className="mt-8 text-left md:mt-0 md:ml-12">
        <p className="mt-4 font-semibold text-gray-600 text-sm md:text-base">
        To create a trusted community where vehicle owners connect, share experiences, and find reputable auto-repair professionals. Our platform empowers users
         to make informed choices based on transparent, authentic reviews, fostering a network of reliable, skilled repair experts dedicated to quality and 
         integrity in their craft.
        </p>
        <a href="" className="mt-4 inline-block font-semibold text-indigo-900 hover:underline">Learn More &rarr;</a>
      </div>
    </section>

    </div>
  );
}

export default Vision;
