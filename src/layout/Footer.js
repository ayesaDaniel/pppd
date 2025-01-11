import React from 'react'
import { BsTwitter } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { CgInstagram } from "react-icons/cg"; 

const Footer = () => {

  let imgSrc = process.env.PUBLIC_URL;
  
  return (
    <div id='contact'>
           <footer className="bg-indigo-900 text-white py-14 items-start text-left">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">

    <div className="flex flex-col gap-4">
    <div class="z-10"><img src={`${imgSrc}/img/Logo.png`} alt="My Image" /></div>
    <span className=" text-2xl font-bold">Community Updates</span>
      <p>Receive updates about new reviews of your favourite repairers</p>
      <div>
      <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg mt-2"/>
      <button className="bg-yellow-500 px-4 py-2 rounded-r-lg mt-2">Subscribe</button>
      </div>
      <p className=" text-sm font-semibold mt-4">@2024 Mekanico Privacy Policy</p>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="font-bold text-2xl">Features</h4>
      <div className="flex flex-col ">
      <a href="#" className="text-gray-300 text-base font-normal">Auto-Repairers</a>
      <a href="#" className="text-gray-300 text-base font-normal">Customer Reviews</a>
      <a href="#" className="text-gray-300 text-base font-normal">Locations</a>
      <a href="#" className="text-gray-300 text-base font-normal">Contact Information</a>
      </div>

      <span className=" mt-10">Join Our Community Today</span>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="font-bold text-2xl">Links</h4>
      <div className="flex flex-col ">
      <a href="#" className="text-gray-300 text-base font-normal">Home</a>
      <a href="#" className="text-gray-300 text-base font-normal">Benefits</a>
      <a href="#" className="text-gray-300 text-base font-normal">About</a>
      <a href="#" className="text-gray-300 text-base font-normal">Contact Us</a>

      </div>
     
      <div className=" flex gap-3 items-center">
        <CgInstagram />
        <BsFacebook />
        <BsLinkedin />
        <BsTwitter />
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer