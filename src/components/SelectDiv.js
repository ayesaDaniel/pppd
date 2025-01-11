import React, { useState, useCallback } from "react";
import { AiOutlineDown } from "react-icons/ai";

const SelectDiv = ({ text, label, states, onChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [filter, setFilter] = useState("");
  const maxResults = 5; // Maximum items to display

  const toggleModal = () => setModalOpen((prev) => !prev);
  const closeModal = () => setModalOpen(false);

  const handleStateSelection = (state) => {
    setSelectedState(state);
    closeModal();
    if (onChange) onChange(state); // Notify parent component
  };

  const handleClearSelection = (e) => {
    e.stopPropagation();
    setSelectedState("");
    if (onChange) onChange(""); // Notify parent component
  };

  const filteredStates = useCallback(() => {
    return states
      .filter((state) => state.toLowerCase().includes(filter.toLowerCase()))
      .slice(0, maxResults);
  }, [states, filter]);

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <label htmlFor="state" className="block text-black font-medium mb-1">
        {label}
      </label>
      <div
        onClick={toggleModal}
        className="w-full bg-white border border-gray-300 rounded-lg p-2 flex items-center px-4 justify-between cursor-pointer"
      >
        <span>{selectedState || text}</span>
        {selectedState && (
          <button
            onClick={handleClearSelection}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        )}
        <AiOutlineDown />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => e.target.id === "modal-overlay" && closeModal()}
        >
          <div className="bg-white w-11/12 md:w-1/2 rounded-lg p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Select {label}</h2>
              <button onClick={closeModal}>✕</button>
            </div>

            <input
              type="text"
              placeholder="Search..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              aria-label="Search states"
            />

            <div className="space-y-4 max-h-64 overflow-y-auto">
              {filteredStates().map((state, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                  onClick={() => handleStateSelection(state)}
                >
                  {state}
                </div>
              ))}
              {filteredStates().length === 0 && (
                <p className="text-gray-500 text-sm">No results found.</p>
              )}
            </div>

            <div className="mt-6 flex items-center justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDiv;
