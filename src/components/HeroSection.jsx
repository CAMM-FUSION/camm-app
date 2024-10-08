import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import video from '../assets/hero1.mp4'; 
import image1 from '../assets/hero3.jpg'; 
import image2 from '../assets/hero4.jpg'; 
import image3 from '../assets/hero5.jpg'; 
import image4 from '../assets/hero6.jpg'; 
// import Navbar from './Navbar';

const HeroSection = () => {
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 5000,     
  };

  const slides = [
    {
      type: 'video',
      src: video, 
      overlayText: 'Welcome to the Library',
    },
    {
      type: 'image',
      src: image1, 
      overlayText: 'Discover New Books',
    },
    {
      type: 'image',
      src: image2, 
      overlayText: 'Join a Community of Readers',
    },
    {
      type: 'image',
      src: image3, 
      overlayText: 'Find Your Next Favorite',
    },
    {
      type: 'image',
      src: image4, 
      overlayText: 'Read Anytime, Anywhere',
    },
  ];

  return (
<>


          
          <div className="relative overflow-x-hidden">
          {/* <div >
<Navbar/>
</div> */}
            <Slider {...settings} className="hero-slider">
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[100vh]">
                  {slide.type === 'video' ? (
                    <video className="w-[99vw] md:w-auto h-screen object-cover" autoPlay loop muted>
                      <source src={slide.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.overlayText}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
                    {slide.overlayText}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
</>
    
           
  );
};

export default HeroSection;
