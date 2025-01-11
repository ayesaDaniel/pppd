import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import SelectDiv from "../components/SelectDiv";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import JSON data
import statesData from "../data/statesAndCity.json";
import carData from "../data/Carlist.json";

// Enums for cadre and expertise
const cadreEnum = [
  { id: 0, value: "Working Class" },
  { id: 1, value: "Business Class" },
];

const expertiseEnum = [
  { id: 1, value: "Auto Mechanic" },
  { id: 2, value: "Auto Electrician/Rewirer" },
  { id: 3, value: "Panel Beater" },
  { id: 4, value: "Auto Painter" },
  { id: 5, value: "Air Conditioning Technician" },
  { id: 6, value: " SpareParts" },
  { id: 7, value: "TowingVehicle" },
];


const SearchRepair = () => {
  const apiUrl = process.env.REACT_APP_REPAIRMAN_URL;
 
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    cadre: "",
    expertise: "",
    carType: "",
    experience: "",
    specialistContact: "",
    address: "",
    postAsAnonymous: false,
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Load states on mount
  useEffect(() => {
    const stateNames = statesData.map((state) => state.state);
    setStates(stateNames);
  }, []);

  // Handle state change to update cities
  const handleStateChange = (selectedState) => {
    setFormData((prev) => ({ ...prev, state: selectedState, city: "" }));
    const stateData = statesData.find((item) => item.state === selectedState);
    setCities(stateData ? stateData.lgas : []);
  };

  const handleCarSelection = (car) => {
    setFormData((prev) => ({ ...prev, carType: car }));
  };

  // Handle form field updates
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   // API call when the "Continue" button is clicked
   const handleContinue = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const queryParams = new URLSearchParams();

      if (formData.name) queryParams.append("FullName", formData.name.trim());
      if (formData.city) queryParams.append("Locality", formData.city);
      if (formData.state) queryParams.append("Location", formData.state);

      // Map cadre and expertise values to their corresponding IDs
      const selectedCadre = cadreEnum.find((c) => c.value === formData.cadre);
      if (selectedCadre) queryParams.append("Cadre", selectedCadre.id);

      const selectedExpertise = expertiseEnum.find(
        (e) => e.value === formData.expertise
      );
      if (selectedExpertise) queryParams.append("SpecialtyIds", selectedExpertise.id);

      queryParams.append("Page", 1);
      queryParams.append("PageSize", 10);

      

      const response = await axios.get(`${apiUrl}?${queryParams.toString()}`);
     

      if (response?.data?.data?.length === 0) {
        setErrorMessage("No results found for the selected options.");
      } else {
        navigate("/searchresult", {
          state: { repairmen: response?.data?.data },
        });
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error);
      setErrorMessage(
        error.response?.data?.responseMessage ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };



  // Data options

  const experienceOptions = [
    "10 years and above",
    "5 to 9 years",
    "2 to 4 years",
    "0 to 1 year",
  ];

  return (
    <section className="bg-customc lg:pb-20">
      <Header />
      <div className="flex justify-center items-center">
        <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
          <h1 className="text-2xl font-medium py-4">Search For Auto-Specialist</h1>
          <div className="bg-customB p-4 rounded-md">
            <p className="text-base p-4 rounded-md bg-customGray text-center mb-3 font-normal">
              When you type a name, the system automatically suggests available details that match
              your entry. So you can select one of them if it matches the specialist you are
              looking for.
            </p>

            <form className="text-left flex flex-col gap-3">
              {/* Specialist Name */}
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter specialist name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900"
                />
              </div>

              {/* State Dropdown */}
              <SelectDiv
                label="State"
                text="Enter the state you are in"
                states={states}
                onChange={handleStateChange}
              />

              {/* City Dropdown */}
              <SelectDiv
                label="City"
                text="Enter the city you are in"
                states={cities}
                onChange={(city) => handleInputChange("city", city)}
              />

                 {/* Cadre Dropdown */}
                 <SelectDiv
                label="Cadre"
                text="Choose one option"
                states={cadreEnum.map((c) => c.value)}
                onChange={(cadre) => handleInputChange("cadre", cadre)}
              />

              {/* Expertise Dropdown */}
              <SelectDiv
                label="Area of Expertise"
                text="Choose area of expertise"
                states={expertiseEnum.map((e) => e.value)}
                onChange={(expertise) => handleInputChange("expertise", expertise)}
              />

              {/* Car Type Dropdown */}
              <SelectDiv
                label="Car Type"
                text="Choose car type"
                states={carData.brands}
                onChange={handleCarSelection}
              />

              {/* Experience Dropdown */}
              <SelectDiv
                label="Year of Experience"
                text="Choose one option"
                states={experienceOptions}
                onChange={(experience) => handleInputChange("experience", experience)}
              />
            </form>
          </div>

         {/* Error Message */}
{errorMessage && (
  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
    {errorMessage}
  </div>
)}


          {/* Submit Button */}
          <button
            onClick={handleContinue}
            className="my-10 px-8 py-2 text-white bg-indigo-900 rounded-lg w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchRepair;
