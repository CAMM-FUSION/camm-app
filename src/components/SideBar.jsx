import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaListAlt, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons
import logo from '../assets/logo.png'; // Import the logo image

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-20 bg-blue-600 z-50 flex flex-col items-center text-white py-6">
      
      {/* Logo */}
      <Link to="/" className="mb-8">
        <img src={logo} alt="CAMM FUSION Logo" className="w-12 h-12 object-contain" />
      </Link>

      {/* Sidebar Navigation Links with Icons */}
      <ul className="space-y-8">
        <li>
          <Link to="/" className="hover:text-gray-300 transition duration-300 flex justify-center">
            <FaHome size={24} />
          </Link>
        </li>
        <li>
          <Link to="/add" className="hover:text-gray-300 transition duration-300 flex justify-center">
            <FaPlus size={24} />
          </Link>
        </li>
        <li>
          <Link to="/books" className="hover:text-gray-300 transition duration-300 flex justify-center">
            <FaListAlt size={24} />
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300 transition duration-300 flex justify-center">
            <FaInfoCircle size={24} />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300 flex justify-center">
            <FaEnvelope size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
