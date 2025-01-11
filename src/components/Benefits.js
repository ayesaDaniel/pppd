import React from 'react'

const Benefits = () => {

    let imgSrc = process.env.PUBLIC_URL;

  return (
    <div>
        {/* How does Poder Work? */}
<section className=" py-2 text-left lg:py-8 lg:px-10 lg:mx-6" id='about'>
<h2 className=" text-3xl text-left font-semibold p-4 my-4">Four Key Benefits</h2>

<div className=" py-8 lg:flex lg:flex-row flex flex-col gap-5 px-4 w-full">

<div className="flex items-center lg:w-1/2 gap-3">
<div class="z-10"><img src={`${imgSrc}/img/like.png`} alt="My Image" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium">Access to Trusted Recommendations</h3>
    <p>Get reliable, first-hand reviews and insights on local auto-repair professionals, helping you find trustworthy experts for any repair need.</p>
   
    </div>
</div>

<div className="flex items-center lg:w-1/2 gap-3"> 
<div class="z-10"><img src={`${imgSrc}/img/Streamlined.png`} alt="My Image" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium">Streamlined Connection with Repair Experts</h3>
    <p>Easily search and connect with repair specialists by location and specialty, making it simpler to find the right person for each job quickly and efficiently.</p>
    </div>
</div>
</div>

<div className=" py-8 lg:flex lg:flex-row flex flex-col gap-5 px-4 w-full">

<div className="flex items-center lg:w-1/2 gap-3"> 
<div class="z-10"><img src={`${imgSrc}/img/man-eye.png`} alt="My Image" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium">Enhanced Visibility for Skilled Repairers</h3>
    <p>Auto-repair professionals gain recognition and visibility as they build positive reviews, expanding their reach to new clients and showcasing their expertise.</p>
   
    </div>
</div>

<div className="flex items-center lg:w-1/2 gap-3"> 
<div class="z-10"><img src={`${imgSrc}/img/head.png`} alt="My Image" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium">Community-Driven Quality Assurance</h3>
    <p>More reviews mean a higher level of transparency, creating a system of accountability where only the most skilled and reliable repairers thrive, ensuring better service for all.</p>
    </div>
</div>
</div>

</section>
    </div>
  )
}

export default Benefits