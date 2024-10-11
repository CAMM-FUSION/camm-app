import React from 'react'

import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className="  text-black py-6 ml-[30%] ">
      <div className="container mx-auto px-4 ">
      <div className="flex flex-row align-center space-x-4 bg-gray-100 p-6 rounded-lg overflow-x-auto">
        <p>Produced by CAMM FUSION</p>
       
     
        
          <div className="flex space-x-8">
            <a href="https://www.facebook.com/gina.ortina.1?mibextid=LQQJ4d" className="hover:text-blue-400 transition-colors duration-300">
              <FaFacebookSquare size={28} />
            </a>
            <a href="https://www.twitter.com/KwekuOwusu18" className="hover:text-red-400 transition-colors duration-300">
              < FaXTwitter size={28} />
            </a>
            
            
            <a href="https://www.instagram.com/naa_ayorkortg?igsh=cTc0bjM2cGNpbHpr" className="hover:text-pink-400 transition-colors duration-300">
              <FaInstagram size={28} />
            </a>

            <a href="https://www.linkedin.com/in/abigail-debrah-a54024b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-blue-600 transition-colors duration-300">
              <FaLinkedin  size={28} />
            </a>

            <a href="https://github.com/CAMM-FUSION" className="hover:text-green-600 transition-colors duration-300">
              < FaGithub size={28} />
            </a>
            <a href="https://www.tiktok.com/@hackmanesi?_t=8qNMH8aLSFR&_r=1" className="hover:text-yellow-600 transition-colors duration-300">
              < FaTiktok  size={28} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer