import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { SiStarship } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const MostReviewed = ({ repairmen }) => {
  let imgSrc = process.env.PUBLIC_URL;


  return (
    <div className="my-6">
      {repairmen.length > 0 ? (
        repairmen.map((repairman) => (
          <Link to="/AutoSpecialistProfile" key={repairman.id}>

          <div
            // key={repairman.id}
            className="flex gap-6 border-2 rounded-lg p-2 lg:p-6 border-gray-300 cursor-pointer hover:shadow-lg hover:border-indigo-500 hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            <div className="z-10">
              <img
                src={`${imgSrc}/img/Frame 1984077937.png`}
                className="h-full"
                alt="Profile"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-left lg:text-xl font-semibold">
                {repairman.name || "Unknown"}
              </h4>
              <span className="flex items-center gap-1">
                <HiLocationMarker className="text-orange-300" />
                <p className="text-xs font-medium md:text-base">
                  {repairman.locality || "No address provided"}
                </p>
              </span>
              <span className="flex items-center gap-1">
                <SiStarship className="text-orange-300" />
                <p className="text-xs font-medium md:text-base">
                  {repairman.cadre || "Cadre not available"}
                </p>
              </span>
              <span className="flex items-center gap-1">
                <FaToolbox className="text-DarkGreen" />
                <p className="text-xs font-medium md:text-base">
                  {repairman.specialties?.join(", ") || "No specialties listed"}
                </p>
              </span>

              <div className="flex gap-6 w-full">
                  <button className="flex items-center justify-center gap-2 w-1/2 py-2 rounded-md bg-lightGreen text-DarkGreen text-xs font-medium">
                    <div className="z-10">
                      <img
                        src={`${imgSrc}/img/solar_like-bold.png`}
                        alt="Like Icon"
                      />
                    </div>
                    <span className="hidden md:block">Like profile</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 w-1/2 py-2 rounded-md bg-lightPurple text-DarkPurple text-xs font-medium">
                    <Link
                      to="/AutoSpecialistProfile"
                      className="flex items-center gap-2"
                    >
                      <div className="z-10">
                        <img src={`${imgSrc}/img/Vector.png`} alt="Call Icon" />
                      </div>
                      <span className="hidden md:block">Call Auto Specialist</span>
                    </Link>
                  </button>
                </div>
            </div>
          </div>
          </Link>

        ))
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default MostReviewed;
