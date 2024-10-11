// src/HomePage.js
import React from 'react';
import home1 from '../../assets/team/home1.jpg';
import home2 from '../../assets/team/home2.jpg';
import home3 from '../../assets/team/home3.jpg';
import home4 from '../../assets/team/home4.jpg';
import home5 from '../../assets/team/home5.jpg';
import home6 from '../../assets/team/home6.jpg';
import home7 from '../../assets/team/home7.jpg';
import home8 from '../../assets/team/home8.jpg';
const images = [home1, home2, home3, home4, home5, home6, home7, home8];

const Home = () => {
    return (
      <div className="min-h-screen grid  ml-[10%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="h-[50%]">
            <img
              src={src}
              alt={`Library Image ${index + 1}`}
              className="w-full h-[70vh] object-cover"
            />
          </div>
        ))}
      </div>
    );
  };

export default Home;
