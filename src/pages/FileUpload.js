import { MdOutlineVerified } from "react-icons/md"; 
import { BsFillCloudUploadFill } from "react-icons/bs"; 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setError("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setError("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-customc lg:pb-20">
    <Header />
    <div className="flex justify-center items-center">
      <div className="max-w-customB max-h-heightD bg-white rounded-md p-6">
        <h1 className="text-2xl font-medium py-4">Upload Images</h1>
        <div className="bg-customB p-4 rounded-md">
        <h3 className=" text-left text-base font-bold my-3">Upload Images of the problem that was fixed</h3>

    {/* upload box */}
     <div className=" flex flex-col lg:flex-row gap-8 my-6">
      {/* before */}
      <div>
          <span className="text-base font-bold">Before</span>
          {/* upload card */}
          <div className=" bg-white p-6 py-10 flex flex-col gap-6  items-center justify-center text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500">
              <BsFillCloudUploadFill className=" w-20 h-20 text-yellow-500" />
              <p className=" text-xs font-normal text">Click here to browse computer, or drag and drop to upload image</p>
            <p  className=" text-xs font-normal text">(Only JPEG, JPG, and PNG files are supported. Maximum file size is 5MB)</p>
          </div>
        </div>

        {/* After */}
        <div>
          <span className="text-base font-bold">After</span>
          {/* upload card */}
          <div className=" bg-white p-6  py-10 flex flex-col gap-6  items-center justify-center text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500">
              <BsFillCloudUploadFill className=" w-20 h-20 text-yellow-500" />
              <p className=" text-xs font-normal text">Click here to browse computer, or drag and drop to upload image</p>
            <p  className=" text-xs font-normal text">(Only JPEG, JPG, and PNG files are supported. Maximum file size is 5MB)</p>
          </div>
        </div>
     </div>

     <p className=" text-sm font-bold text-left my-2">Tips for your station to get approved</p>
    <div className="flex flex-col text-left lg:flex-row gap-3 lg:items-center mb-8">
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">A full landscape picture capturing teh affected spot in the car</p>
    </div>
    <div className=" flex items-center gap-1">
      <MdOutlineVerified className=" text-green-500" />
      <p className=" text-sm font-normal">Ensure it is very clear/not blurry</p>
    </div>
    </div>
        </div>

        {/* Submit Button */}
        <Link to="/searchresult">
          <button className="my-10 px-8 py-2 text-white bg-indigo-900 rounded-lg w-full">
          Save and Continue
          </button>
        </Link>
      </div>
    </div>
  </section>
  );
};

export default FileUpload;


