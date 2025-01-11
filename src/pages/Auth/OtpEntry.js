import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const OtpEntry = () => {
  const apiUrl = process.env.REACT_APP_OTP_URL;
  const verifyapi = process.env.REACT_APP_VERIFYOTP_URL;

  const location = useLocation();
  const navigate = useNavigate();
  const { reference_id, email, phone,fullName } = location.state || {}; // Retrieve reference_id, email, and phone from state

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const inputRefs = useRef([]);

  let imgSrc = process.env.PUBLIC_URL;

  // Handle OTP input change
  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Start a countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle OTP submission

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
  
    const requestBody = {
      reference_id,
      email,
      token: otp.join(""), // Combine OTP digits into a single string
    };
  
    try {
      const response = await axios.post(verifyapi, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      if (response.status === 200) {
        setSuccessMessage("OTP verified successfully! Your account is now active.");
        // Navigate to confirm password page
        navigate("/continue", {
          state: { reference_id, email, phone, fullName }, // Pass required state to the next page
        });
      } else {
        console.error("OTP Verification API Error:", response.data);
        setErrorMessage(response.data.responseMessage || "OTP verification failed. Please try again.");
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
  

  // Handle Resend OTP
  const handleResend = async () => {
    setResending(true);
    setErrorMessage("");
    setSuccessMessage("");

  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.status === 200) {
        setSuccessMessage("OTP has been resent successfully!");
        setTimer(60); // Restart the timer
      } else {
        console.error("Resend OTP API Error:", response.data);
        setErrorMessage(response.data.responseMessage || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected Error in Resend OTP:", error);
      setErrorMessage(
        error.response?.data?.responseMessage ||
          "An unexpected error occurred while resending OTP."
      );
    } finally {
      setResending(false);
    }
  };
  
  return (
    <div
    className='h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center'
    style={{
      backgroundImage: `url('${imgSrc}/background-img/top-rated.jpg')`,
    }}
  >

      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Modal */}
      <div className="bg-white z-10 p-8 rounded-lg shadow-lg w-96 text-center">
        <div className="z-10 flex items-center justify-center mb-6">
          <img src={`${imgSrc}/img/Group 1.png`} alt="My Image" />
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") handleBackspace(e.target.value, index);
              }}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        <h1 className="text-2xl font-bold mb-4 text-gray-800">Enter OTP</h1>
        <p className="text-gray-600 mb-6">A code has been sent to your Email.</p>

        {/* Timer */}
        <p className="text-gray-400 text-sm mb-4">
          {timer > 0 ? (
            `You can resend the code in 0:${timer.toString().padStart(2, "0")}`
          ) : (
            <button
              onClick={handleResend}
              className="text-blue-500 underline hover:text-indigo-900"
              disabled={resending}
            >
              {resending ? "Resending..." : "Resend OTP"}
            </button>
          )}
        </p>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-indigo-800 text-white py-2 px-4 rounded-md w-full hover:bg-indigo-900 transition cursor-pointer"
          disabled={otp.includes("") || loading}
        >
          {loading ? "Submitting..." : "Continue"}
        </button>

        {/* Error and Success Messages */}
        {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default OtpEntry;
