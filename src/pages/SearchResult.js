import { MdOutlineSegment } from "react-icons/md"; 
import React, { useState } from "react";
import Header from "../layout/Header";
import MostReviewed from "../components/MostReviewed";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const repairmenData = location.state?.repairmen || {}; // Get the repairmen object
  const repairmen = repairmenData.data || []; // Extract the actual array of repairmen


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
  const states = [
    "Most reviewed",
    "Most recent",
    "Oldest",
    "Registration date",
    "Years of Experience",
  ];

  return (
    <div className="bg-customc lg:pb-20">
      <Header />

      <div className="flex justify-center items-center">
        <div className="max-w-customB max-h-heightD bg-white rounded-md p-8 md:px-12 px-4">
          <h1 className="text-2xl font-medium py-2 text-left">
            {repairmen.length} results for your search!
          </h1>
          <p className="text-left">
            The results of your search are shown below in the most reviewed order.
            You can use the filter feature below to view them in any order that you like.
          </p>

          <div className="flex items-center justify-between my-4 cursor-pointer">
            <h3 className="text-xl font-semibold">Most Reviewed</h3>

            <div className="flex items-center gap-2" onClick={toggleModal}>
              <span className="text-base font-medium">Most reviewed</span>
              <MdOutlineSegment />
            </div>
          </div>

          {/* Most Reviewed List */}
          <div className=" ">
          <MostReviewed repairmen={repairmen} />
          </div>

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
              <h2 className="text-center text-2xl font-semibold my-6">Sort views by</h2>

              {/* State Options */}
              <div className="space-y-4 p-4 lg:px-20">
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
              <div className="mt-6 flex items-center justify-end gap-2">
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
  );
};

export default SearchResult;
