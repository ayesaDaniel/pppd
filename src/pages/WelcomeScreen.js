import React from 'react'
import Button from '../components/buttons/Button'
import { Link } from 'react-router-dom'

const WelcomeScreen = () => {

  let imgSrc = process.env.PUBLIC_URL;

  return (

    <div
    className='h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center'
    style={{
      backgroundImage: `url('${imgSrc}/background-img/welcom-screenn.jpg')`,
    }}
  >

   {/* Dark Overlay */}
   <div className="absolute inset-0 bg-black opacity-60"></div>
        <section 
        className="z-30" 
        >
            <div className=' gap-12 flex flex-col justify-center items-center p-4 py-6 lg:p-11 bg-white max-w-custom max-h-height rounded-3xl '>
            <div class="z-10"><img src={`${imgSrc}/img/Group 1.png`} alt="My Image" /></div>
            <h2 className=' text-2xl font-bold'>Welcome to Mekanico</h2>
            <p className=' text-base font-semibold lg:px-20 '>Connect with trusted car repairers, share your experiences, 
            and keep your car running smoothly.</p>
           <Link to="/rated">  <Button
                text="Get Started"
                style={"px-8 py-2 text-white bg-indigo-900 rounded-3xl sm:w-full lg:w-auto "}
             /></Link>
            </div>
        </section>
    </div>
  )
}

export default WelcomeScreen