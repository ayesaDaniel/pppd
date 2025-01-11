import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Header from "../../layout/Header";

const CardPayment = () => {

    
    let imgSrc = process.env.PUBLIC_URL;

    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
      const publicKey = process.env.REACT_APP_PUBLICKEY_URL;
  
      const email = "customer@example.com";
      const amount = 5000 * 100; // Amount in kobo (Naira -> 50 NGN)
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
      };
    
      const componentProps = {
        email,
        amount,
        publicKey,
        text: "save and continue",
        onSuccess: () => alert("Payment Successful"),
        onClose: () => alert("Payment Closed"),
      };
      
  return (
    <section className="bg-customc lg:pb-20">
    <Header />
    <div className="flex justify-center items-center">
      <div className="max-w-custom max-h-heightD bg-white rounded-md p-6">
        <h1 className="text-2xl font-medium py-4">Checkout</h1>
      
        <p className="text-base text-DarkGreen p-4 rounded-md bg-customGray text-center mb-4 font-medium ">
        Pay with card
            </p>

            <p className="text-center text-gray-600 mb-6">
          Please enter your card details to make payment
        </p>

          {/* Card Number Input */}
            <div className="mb-4 text-left">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1111 2222 3333 4444"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>


        {/* Card Expiry & CVV */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-left">
          <div>
            <label className="block text-gray-700">Card Expiry</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              placeholder="123"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        

        <div className="bg-customB p-4 rounded-md mt-20 ">
        
        <div className="flex justify-between">
            <p className=" text-sm font-bold">Step 1 0f 3</p>
            <div className="z-10 "><img src={`${imgSrc}/img/Frame 113.png`}  className=" object-cover" /></div>
    
        </div>

    {/* Submit Button */}
        
    {/* <button className="my-10 px-8 py-2 text-white bg-gray-500  rounded-lg w-full"
  
  >
  Save and Continue
  </button> */}

   {/* Paystack Button */}
   <PaystackButton
          {...componentProps}
        className="my-10 px-8 py-2 text-white bg-gray-500  rounded-lg w-full"
        />

        </div>
        

      </div>
    </div>

  </section>  
  )
}

export default CardPayment