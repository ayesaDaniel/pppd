import { MdOutlineVerified } from "react-icons/md"; 
import { BsFillCloudUploadFill } from "react-icons/bs"; 
import React, { useState } from "react";
import Header from "../layout/Header";

const ReceiptUpload = () => {

    const [isModalOpen, setModalOpen] = useState(false);

  // Close the modal
  const closeModal = () => setModalOpen(false);

  // Handle modal close when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  // Toggle modal open/close state
  const toggleModal = () => setModalOpen((prev) => !prev);

    let imgSrc = process.env.PUBLIC_URL;
    
  return (

<section className="bg-customc lg:pb-20">
    <Header />
    <div className="flex justify-center items-center">
      <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
        <h1 className="text-2xl font-medium py-4">Upload Receipt (Optional)</h1>
        <div className="bg-customB p-4 rounded-md">
        <p className="text-xs p-4 rounded-md bg-customGray text-center mb-3 font-normal">
        Upload a receipt to show that you the specialist has worked on your car before. It may not be the receipt of the latest work that was done.
            </p>

    {/* upload box */}
    
      <div>
          {/* upload card */}
          <div className=" bg-white p-6 w-full py-10 flex flex-col gap-6  items-center justify-center text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500">
              <BsFillCloudUploadFill className=" w-20 h-20 text-yellow-500" />
              <p className=" text-xs font-normal text">Click here to browse computer, or drag and drop to upload image</p>
            <p  className=" text-xs font-normal text">(Only JPEG, JPG, and PNG files are supported. Maximum file size is 5MB)</p>
          </div>
        </div>

       

     <p className=" text-sm font-bold text-left my-2">Tips for your station to get approved</p>
    <div className="flex flex-col text-left lg:flex-row gap-3 lg:items-center mb-8">
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">A full landscape picture capturing teh affected spot in the car</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Ensure it is very clear/not blurry</p>
    </div>
    </div>
        </div>

        {/* Submit Button */}
        
          <button className="my-10 px-8 py-2 text-white bg-indigo-900 rounded-lg w-full"
           onClick={toggleModal}
          >
          Submit
          </button>
        

      </div>
    </div>


    {/* Modal */}
<div>
        {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white w-11/12 flex flex-col items-center md:w-1/2 rounded-lg p-6 relative">
            {/* Modal Header */}

          <div className="z-10 my-6"><img src={`${imgSrc}/img/Vector (4).png`}  className=" object-cover" /></div>
        
        <p className="my-6 text-base font-bold px-6" >You have successfully reviewed your auto-specialist. You can check or edit your entry at any time once it has been approved.</p>
          
     
     <button className='px-8 py-2 text-white bg-indigo-900 rounded-lg w-full'>
     Check Your Review
              
             </button>
   
             <button className="my-6 underline text-blue-900 " onClick={closeModal}>Back</button>
          </div>
        </div>
      )}

    </div>

  </section>  

  )
}

export default ReceiptUpload