import { AiFillStar } from "react-icons/ai"; 
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../layout/Header'

const ReviewSpeciaist = () => {
  return (
    <section className="bg-customc lg:pb-20">
      <Header />
      <div className="flex justify-center items-center">
        <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
          <h1 className="text-2xl font-medium py-4">Review Your Auto-Specialist</h1>
          <div className="bg-customB p-4 rounded-md">
          
            <p className="text-base p-4 rounded-md bg-customGray text-center mb-5 font-normal">
            Write you review below, describing the problem that was fixed in your car.
            </p>

            <div className="text-base p-6 rounded-md bg-white text-left mb-3 font-semibold ">
           <p className='mb-6 '>
           I recently brought my car to Peter because it had persistent engine misfires and strange vibrations while driving. Peter quickly diagnosed the issue 
           as a faulty ignition coil and worn-out spark plugs. He explained the problem clearly and outlined the necessary repairs, ensuring I understood every 
           step.
           </p>
           <p className=''>
           With remarkable professionalism, Peter replaced the ignition coil and spark plugs efficiently, tested the engine thoroughly, and even shared helpful 
           maintenance tips. My car now runs perfectly, and I couldn’t be happier with the quality of his work. Highly recommend Peter for any auto repair needs!
           </p>
            </div>

            {/* Rate specialist */}
            <div className=' text-left'>
                <h2 className='text-base font-bold mb-3'>Rate Auto-Specialist</h2>
                <p className='text-base font-normal mb-3'>Click on any star below to indicate how satisfied you are.</p>
           
           <div className=' p-6 rounded-md flex gap-3 bg-white'>
            <AiFillStar className=" w-6 h-6 text-gray-400" />
            <AiFillStar className=" w-6 h-6 text-gray-400" />
            <AiFillStar className=" w-6 h-6 text-gray-400" />
            <AiFillStar className=" w-6 h-6 text-gray-400" />
            <AiFillStar className=" w-6 h-6 text-gray-400" />
           </div>
           </div>

          </div>

          {/* Submit Button */}
          <Link to="/searchresult">
            <button className="my-10 px-8 py-2 text-white bg-indigo-900 rounded-lg w-full">
            Save and Continue
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReviewSpeciaist