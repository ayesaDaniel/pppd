import { BiTransferAlt } from "react-icons/bi"; 
import { BsFillCreditCardFill } from "react-icons/bs"; 
import React from 'react'
import Header from '../../layout/Header'

const Checkout = () => {

    let imgSrc = process.env.PUBLIC_URL;
  return (
    <section className="bg-customc lg:pb-20">
    <Header />
    <div className="flex justify-center items-center">
      <div className="max-w-custom max-h-heightD bg-white rounded-md p-6">
        <h1 className="text-2xl font-medium py-4">Checkout</h1>
        <div className="bg-customB p-4 rounded-md">
        <p className="text-base text-DarkGreen p-4 rounded-md bg-customGray text-center mb-3 font-medium ">
        Paystack Checkout
            </p>
            {/* Choose payment option */}
        <div className='text-left border-b-2 border-gray-300 py-6'>
            <p className=' text-base font-medium mb-3'>Choose payment option</p>
            <p className=' text-xs font-normal mb-3'>You can choose from the payment options below to pay <span className=' font-semibold'> N10000</span> for premium features.</p>
        </div>    

        {/* Pay with card */}
           <div className="flex items-center py-6 gap-2 text-left border-b-2 border-gray-300">
            <BsFillCreditCardFill className=" w-8 h-6" />
            <p className=' text-base font-medium'>Pay with card</p>
           </div>
{/* 
           Pay with transfer */}
           <div className="flex items-center py-6 gap-2 text-left border-b-2 border-gray-300">
            <BiTransferAlt className=" w-8 h-6" />
            <p className=' text-base font-medium'>Pay with transfer</p>
           </div>
          

        </div>

        <div className="bg-customB p-4 rounded-md mt-20 ">
        
        <div className="flex justify-between">
            <p className=" text-sm font-bold">Step 1 0f 3</p>
            <div className="z-10 "><img src={`${imgSrc}/img/Frame 113.png`}  className=" object-cover" /></div>
    
        </div>

    {/* Submit Button */}
        
    <button className="my-10 px-8 py-2 text-white bg-gray-500  rounded-lg w-full"
  
  >
  Save and Continue
  </button>
        </div>
        

      </div>
    </div>

  </section>  

  )
}

export default Checkout

  