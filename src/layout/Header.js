import { FaTimes } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Load user information from localStorage
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    if (userData) {
      setUserInfo(userData);
    }
  }, []); // Only run once on component mount

  let imgSrc = process.env.PUBLIC_URL;

  return (
    <div className="relative mb-12">
      <header className="border-b-4 md:px-10 fixed top-0 w-full z-30 flex items-center justify-between px-8 right-0 py-4 bg-opacity-90 bg-gray-50 border-b-gray-100 md:bg-inherit lg:relative">
        <Link to="/">
          <div className="z-10">
            <img src={`${imgSrc}/img/Group 1.png`} alt="Logo" />
          </div>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          <a href="#vision" className="text-gray-700 hover:text-indigo-900">
            Vision
          </a>
          <a href="#repairers" className="text-gray-700 hover:text-indigo-900">
            Repairers
          </a>
          <a href="#about" className="text-gray-700 hover:text-indigo-900">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-900">
            Contact us
          </a>
        </nav>

        <div className="hidden space-x-4 md:flex md:items-center">
          {userInfo ? (
            <>
              {/* Display user's full name */}
              <span className="text-indigo-900 font-semibold">
                {userInfo.fullName || "User"}
              </span>
              {/* Display dummy profile image */}
              <div className="flex items-center">
                <img
                  src={`${imgSrc}/img/SAVE_20241220_135955.jpg`}
                  alt="User Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {/* Log In button */}
              <Link to="/signin">
                <button className="text-indigo-900">Log In</button>
              </Link>
              {/* Create Account button */}
              <Link to="/create">
                <Button
                  text="Create Account"
                  style="px-8 py-2 text-white bg-indigo-900 rounded-3xl sm:w-full lg:w-auto"
                />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="z-30 md:hidden text-3xl text-black cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <AiOutlineBars />}
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-indigo-900 flex flex-col px-6 justify-center text-xl text-white z-20 pt-10">
          <div className="flex flex-col gap-5 p-3 border-b pb-12">
            <div className="flex gap-3 items-center">
              <img
                src={`${imgSrc}/nav/Vector.png`}
                alt="Buyers"
                className="h-5 max-w-24"
              />
              <a
                href="#buyers"
                onClick={toggleMenu}
                className="hover:text-gray-300"
              >
                Buyers
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={`${imgSrc}/nav/staff.png`}
                alt="Staff"
                className="h-5 max-w-24"
              />
              <a
                href="#station-staff"
                onClick={toggleMenu}
                className="hover:text-gray-300"
              >
                Station Staff
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={`${imgSrc}/nav/bussines.png`}
                alt="Business"
                className="h-5 max-w-24"
              />
              <a
                href="#business"
                onClick={toggleMenu}
                className="hover:text-gray-300"
              >
                Business
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
