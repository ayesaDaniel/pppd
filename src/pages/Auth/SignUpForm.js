import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const apiUrl = process.env.REACT_APP_LOGIN_URL;
  const location = useLocation(); // Get the state passed from the previous page
  const { reference_id, email, phone, fullName } = location.state || {}; // Extract state or provide defaults

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: email || "", // Use passed email or default to empty
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    const requestBody = {
      guid, 
      email: formData.email,
      password: formData.password,
    };

    try {
      
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          credentials: 'include',
        },
      });

      if (response.status === 200) {
        // Save user information to localStorage
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            fullName,
            email,
            phone,
          })
        );
        // Navigate to the next page
        navigate("/search");
      }
    } catch (error) {
      console.error("Login API Error:", error);
      setErrorMessage(
        error.response?.data?.responseMessage || "Login failed. Please try again."
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
      <div className="bg-white z-30 p-4 lg:p-8 rounded-xl shadow-lg text-left lg:max-w-custom max-h-heightC w-96 lg:w-full">
        <div className="z-10 flex items-center justify-center mb-6">
          <img src={`${imgSrc}/img/Group 1.png`} alt="Logo" />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-900"
              placeholder="Johndoe@gmail.com"
              required
            />
          </div>
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
          <p className="text-gray-500 text-sm mb-4">Password must be at least 8 characters</p>

          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 rounded-lg font-medium hover:bg-indigo-800"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            You don't have an account?{" "}
            <Link to="/started">
              <span className="text-indigo-900">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
