import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ConfirmPassword = () => {
  const location = useLocation();
  const { reference_id, email, phone, fullName } = location.state || {}; // Retrieve reference_id and email from state

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setLoading(false);
      return;
    }

    const apiUrl = process.env.REACT_APP_COMFIRMPASS_URl;

    const guid = generateGUID(); // Function to generate unique request ID

    const requestBody = {
      requestId: guid,
      email,
      phone,
      fullName,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };


    try {
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      

      if (response.status === 200) {
        setSuccessMessage("Password confirmed! You are now onboarded.");
        setTimeout(() => navigate("/emailVerification",
          {
            state: { reference_id, email, phone, fullName }, // Pass required state to the next page
          }
        ), 2000); // Redirect to Sign-In after success
      } else {
        console.error("API Error:", response.data);
        setErrorMessage(
          response.data.errors
            ? Object.values(response.data.errors).flat().join(" ")
            : "Failed to onboard. Please try again."
        );
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setErrorMessage(
        error.response?.data?.errors
          ? Object.values(error.response.data.errors).flat().join(" ")
          : "An unexpected error occurred. Please try again."
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

        <h1 className="text-2xl font-semibold mb-6">Confirm Password</h1>

        <form onSubmit={handleSubmit}>
          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900"
              placeholder="Password"
              minLength="8"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-sm leading-5 cursor-pointer"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900"
              placeholder="Confirm Password"
              minLength="8"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-sm leading-5 cursor-pointer"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <p className="text-gray-500 text-sm mb-4">Password must be at least 8 characters</p>

          {/* Error and Success Messages */}
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 rounded-lg font-medium hover:bg-indigo-800"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Do you already have an account?{" "}
            <Link to="/signin">
              <span className="text-indigo-900">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
