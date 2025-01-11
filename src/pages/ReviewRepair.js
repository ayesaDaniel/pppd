import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import SelectDiv from '../components/SelectDiv';
import { Link } from 'react-router-dom';

// Import JSON data
import statesData from '../data/statesAndCity.json';

const ReviewRepair = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [formData, setFormData] = useState({
    specialistContact: '',
    address: '',
    postAsAnonymous: false,
  });

  // Load states from JSON data on mount
  useEffect(() => {
    const stateNames = statesData.map((state) => state.state);
    setStates(stateNames);
  }, []);

  // Update cities (LGAs) when state changes
  const handleStateChange = (state) => {
    setSelectedState(state);
    const selectedStateData = statesData.find((item) => item.state === state);
    setCities(selectedStateData ? selectedStateData.lgas : []);
  };

  // Update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      postAsAnonymous: e.target.checked,
    }));
  };

  return (
    <section className="bg-customc lg:pb-20">
      <Header />

      <div className="flex justify-center items-center">
        <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
          <h1 className="text-2xl font-medium py-4">Fill Form</h1>

          <div className="bg-customB p-4 rounded-md">
            <p className="text-base p-4 rounded-md bg-customGray text-center mb-3 font-normal">
              To submit a valid review, please provide specific details of the auto-specialist that worked on your
              vehicle.
            </p>

            <h2 className="text-left mb-2">Name of specialist</h2>
            <form>
              <input
                type="text"
                className="w-full bg-white p-2 mb-3 text-left rounded-md font-medium"
                placeholder="Enter specialist name"
                name="specialistContact"
                onChange={handleInputChange}
              />
            </form>

            <div className="bg-customc p-4 px-6">
              <div className="flex items-center gap-2 p-8 border-b-gray-400 border-b-2">
                <div className="z-10">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/Frame 1984077416.png`}
                    className="object-cover"
                    alt="Specialist"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-base font-bold">Peter Jeff</h3>
                  <span className="text-xs font-semibold">Review</span>
                  <p className="text-xs font-normal">
                    12, Sabbath Day Fuel Enterprise, Victoria Island, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-customB p-4 rounded-md mt-8">
            <p className="text-base p-4 rounded-md bg-customGray text-center mb-3 font-normal">
              If you can’t find the profile you are looking for in the above suggestions, please provide more details
              below for a more refined search.
            </p>

            <form className="text-left flex flex-col gap-3">
              {/* Specialist Contact */}
              <div>
                <label htmlFor="specialistContact" className="block text-black font-medium mb-1">
                  Specialist Contact
                </label>
                <input
                  type="text"
                  id="specialistContact"
                  name="specialistContact"
                  placeholder="Enter specialist phone number"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900"
                  onChange={handleInputChange}
                />
              </div>

              {/* State Selector */}
              <SelectDiv
                label="State of workshop"
                text="Select the state of workshop"
                states={states}
                onChange={handleStateChange}
              />

              {/* City Selector */}
              <SelectDiv
                label="City of workshop"
                text="Select the city of workshop"
                states={cities}
                onChange={(city) => setFormData((prev) => ({ ...prev, city }))}
              />

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-black font-medium mb-1">
                  Address of Workshop
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter the address of workshop"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900"
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>

          <div className="bg-customB p-2 rounded-md my-12">
            <label className="flex items-center gap-3 text-left text-sm font-bold">
              <input
                type="checkbox"
                name="postAsAnonymous"
                checked={formData.postAsAnonymous}
                onChange={handleCheckboxChange}
              />
              Post as anonymous
            </label>
          </div>

          <Link to="/AutoSpecialistProfile">
            <button className="my-10 px-8 py-2 text-white bg-indigo-900 rounded-lg w-full">
              Save and continue
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewRepair;
