import React from 'react'
import { Link } from 'react-router-dom'

const EmailVerification = () => {

  let imgSrc = process.env.PUBLIC_URL;

  return (
    <div 
    className='h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center'
    style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5a66/5ea8/f2571e9127a6c93e5cec5ac1225a8bbc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R52TA8V5zWrHm83MeF539zQgY1SZtyszDCowE6p~wGaE-05G5Ur3rn-06zxLmhUQ6Op9Z1vr-gXjvGWYlBaHNki2I6qk1PAbMJIvmRme6l6aYqX0Dc36HMREJb~KGgVItsFAPqJqBZNe-U5BQWh0BHEPuqzbMwk6QQJd2FTF6aJr5nOMs7ULaci2Th21458leM3nvdO8C0U5KRxGDiUeEK5jV-5DkjxMfpSUViss4BJJDojDviCbhLDej-wNf0f4tW1FkHULNTBrovh49dCq3vmcI1tvbHI7XxQ68RMlBLQxQO42LZA45iKNFHJlxway~ZWq6IZkM87c4NinkyAZlQ__')`,
    }}
    >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
        <section 
        className="z-30" 
        >
            <div className=' gap-12 flex flex-col justify-center items-center p-4 py-6 lg:p-11 bg-white max-w-custom max-h-height rounded-3xl '>
            <div class="z-10"><img src={`${imgSrc}/img/mail_3037993 1.png`} alt="My Image" /></div>
            <h2 className=' text-2xl font-bold'>Email Verification Needed</h2>
            <p className=' text-base font-normal  lg:px-20 '>A verification link has been sent to <span className=' text-green-600'>johndoe@gmail.com. </span>
             Please, check your mail and click on the link provided to complete your registeration.</p>
             
            <p className=' text-base font-semibold   lg:px-20 '>If you didnt receive any link, click on the button below for the link to be sent again. </p>

           <Link to="/emailVerification">
           <button className="px-8 py-2 text-white bg-indigo-900 rounded-lg font-bold  sm:w-full ">Resend Verification Email</button>
           </Link>
            </div>
        </section>
    </div>
  )
}

export default EmailVerification