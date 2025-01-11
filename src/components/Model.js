import React, { useState } from 'react'

const Model = ({ label, isModalOpen, closeModal, handleOutsideClick, states }) => {


  return (
    <div>
        {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white w-11/12 md:w-1/2 rounded-lg p-6 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Select {label}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            <input type="name" name="name"
             className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900 my-4"
            />

            {/* State Options */}
            <div className="space-y-4">
              {states.map((state, index) => (
                <div key={index} className="flex items-center">
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
  )
}

export default Model