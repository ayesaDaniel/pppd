import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  let imgSrc = process.env.PUBLIC_URL;
  
  return (
    <div
    className='h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center'
    style={{
      backgroundImage: `url('${imgSrc}/background-img/top-rated.jpg')`,
    }}
  >

     {/* Dark Overlay */}
     <div className="absolute inset-0 bg-black opacity-60"></div>
        <section 
        className="z-30" 
        >
            <div className=' gap-8  flex flex-col justify-center items-center p-4 py-6 lg:p-11 bg-white max-w-custom   max-h-height   rounded-3xl '>
            <div class="z-10"><img src={`${imgSrc}/img/Group 1.png`} alt="My Image" /></div>
            <div class="z-10"><img src={`${imgSrc}/img/friendly-man-auto-mechanic-car.png`} alt="My Image" /></div>
            <h2 className=' text-2xl font-bold'>Share Your Experience</h2>
            <p className=' text-base font-semibold lg:px-20 '>Rate and review your favorite mechanics to help others find the best service.</p>

        <div className="flex gap-1">
        <div class="z-10"><img src={`${imgSrc}/bullets/Frame 1984077989.png`} alt="" /></div>
        <div class="z-10"><img src={`${imgSrc}/bullets/Frame 1984077989.png`} alt="" /></div>
        <div class="z-10"><img src={`${imgSrc}/bullets/Frame 1984077987.png`} alt="" /></div>
        </div>    

        <Link to="/started"><button className="px-8 py-2 text-white bg-indigo-900 rounded-lg font-bold  sm:w-full ">Get started</button></Link>
            
            </div>

        </section>
    </div>
  )
}

export default Experience