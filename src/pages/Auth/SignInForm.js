import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SignInForm = () => {
  const apiUrl = process.env.REACT_APP_REGISTERATION_URL;

  const apiKey = process.env.REACT_APP_PUBLICKEY_URL;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const generateGUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
  
    const guid = generateGUID(); // Function to generate unique request ID
  
  
    const registrationRequestBody = {
      requestId: guid,
      email: formData.email,
      phone: formData.phone,
      fullName: formData.fullName, // Include fullName in the registration payload if required
    };
  
    try {

  
      // Call Registration API with Axios
      const response = await axios.post(apiUrl, registrationRequestBody, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          // Authorization: apiKey,
        },
      });
  
      if (response?.data?.responseMessage) {
        console.log("Registration Successful.");
  
        // Navigate to OTP Page
        navigate("/otp", {
          state: {
            reference_id: response?.data?.data?.referenceId,
            email: formData.email,
            phone: formData.phone,
            fullName: formData.fullName,    
          },
        });
      } else {
        // console.error("Registration API Error:", response.data);
        setErrorMessage(response.data.responseMessage || "Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setErrorMessage(
        error.response?.data?.responseMessage || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  

  

  let imgSrc = process.env.PUBLIC_URL;   

  return (
    <div
    className='h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center'
    style={{
      backgroundImage: `url('${imgSrc}/background-img/medical.jpg')`,
    }}
  >

      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="bg-white z-30 p-4 lg:p-8 rounded-lg shadow-lg text-left lg:max-w-custom max-h-heightC w-96 lg:w-full">
        <div className="z-10 flex items-center justify-center mb-6">
          <img src={`${imgSrc}/img/Group 1.png`} alt="My Image" />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Johndoe@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="+234***********"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mr-2"
              required
            />
            <label htmlFor="termsAccepted" className="text-gray-700">
              I agree to the <a href="#" className="text-indigo-600">Terms and Conditions</a>
            </label>
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 rounded-lg font-medium hover:bg-indigo-800"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Continue'}
          </button>
        </form>

        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-600">or sign up with</span>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-gray-200 p-2 rounded-full">
            <div className="z-10">
              <img src={`${imgSrc}/img/flat-color-icons_google.png`} alt="google" />
            </div>
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <div className="z-10">
              <img src={`${imgSrc}/img/Frame 19.png`} alt="facebook" />
            </div>
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <div className="z-10">
              <img src={`${imgSrc}/img/Frame 20.png`} alt="apple" />
            </div>
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Do you already have an account?{' '}
            <Link to="/signin">
              <a href="#" className="text-indigo-900">
                Login
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
