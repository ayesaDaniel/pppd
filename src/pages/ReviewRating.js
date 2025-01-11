import React, { useState } from 'react'
import Header from '../layout/Header'
import { MdOutlineSegment } from 'react-icons/md'
import BeforeAfter from '../components/BeforeAfter';
import Button from '../components/buttons/Button';
import Model from '../components/Model';

const ReviewRating = () => {

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

  // State options for the modal
  const states = ["Most relevant", "Most recent"];

  return (
    <div className='bg-customc lg:pb-20 '>
    <Header/>

<div className=' flex justify-center items-center'>

<div className=' max-w-customD max-h-heightD bg-white rounded-md p-8 md:px-12 px-4  '>
         <h1 className=' text-2xl font-medium py-2 text-center '>Reviews And  Ratings</h1>

       {/* Top Buttons */}
       <section className=' my-6'>
       <div className="flex items-center justify-center gap-4 lg:gap-6">
        <button className="lg:px-14 px-10  py-2 border border-gray-300 bg-white rounded-3xl ">All</button>
        <button className="lg:px-14 px-10 py-2 border border-gray-300 bg-white rounded-3xl ">Positive</button>
        <button className="lg:px-14 px-10 py-2 border border-gray-300 bg-white rounded-3xl ">Critical</button>
        </div>
       </section>

       <div className=" flex items-center justify-between my-4">
            <h3 className=" text-xl font-semibold">All</h3>

            <div className="flex items-center gap-2 cursor-pointer"
            onClick={toggleModal}
            >
                <span className=" text-base font-medium">
                    Most Recent
                </span>
                <MdOutlineSegment />
                
            </div>
        </div>

        {/* Review boxes */}
        <BeforeAfter/>
        <BeforeAfter/>
        <BeforeAfter/>

      
             <button className='px-8 py-2 text-white bg-indigo-900 rounded-lg w-full'>
              Write a Review
              
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
          <div className="bg-white w-11/12 md:w-1/2 rounded-lg p-6 relative">
            {/* Modal Header */}
          
          <h2 className=" text-center text-2xl font-semibold my-6">Sort Reviews by</h2>

            {/* State Options */}
            <div className="space-y-4 p-4 lg:px-20 ">
              {states.map((state, index) => (
                <div key={index} className="flex items-center text-center">
                  <input
                    type="radio"
                    id={state}
                    name="state"
                    value={state}
                    className="h-5 w-5 text-blue-600"
                  />
                  <label htmlFor={state} className="ml-2 text-gray-700">
                    {state}
                  </label>
                </div>
              ))}
            </div>

            {/* Modal Buttons */}
            <div className="mt-6 flex items-center justify-end gap-2 ">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

</div>
  )
}

export default ReviewRating