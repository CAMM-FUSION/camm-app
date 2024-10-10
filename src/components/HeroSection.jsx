import React from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slide1.png";
import image2 from "../assets/slide2.png";
import image3 from "../assets/slide3.png";
import image4 from "../assets/slide4.png";
import image5 from "../assets/form3.jpg";
import Sidebar from "./SideBar"; // Updated import for Sidebar

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds per slide
    fade: true, // Smooth fade transition
    pauseOnHover: false, // Ensure autoplay continues
  };

  const slides = [
    {
      type: "image",
      src: image1,
      overlayText: "CAMM FUSION is your all-in-one library management solution",
    },
    {
      type: "image",
      src: image2,
      overlayText:
        "It’s designed to streamline cataloging, borrowing, and organizing resources with ease",
    },
    {
      type: "image",
      src: image3,
      overlayText:
        "Whether you’re managing a personal collection or a large institution, CAMM FUSION fits your needs",
    },
    {
      type: "image",
      src: image4,
      overlayText:
        "The app simplifies every step of the library management process",
    },
    {
      type: "image",
      src: image5,
      overlayText:
        "With a user-friendly interface and powerful features, it helps keep your library running smoothly",
    },
  ];

  return (
    <>
      {/* Render Sidebar */}
      <Sidebar /> 
      <div className="relative overflow-x-hidden">
        <Slider {...settings} className="hero-slider">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[100vh]">
              {slide.type === "video" ? (
                <video
                  className="w-[100vw] md:w-auto h-screen object-contain"
                  autoPlay
                  loop
                  muted
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.overlayText}
                  className="w-full h-full object-contain" // Use object-contain to fit the image fully
                />
              )}
              {/* Updated Overlay Positioning and Styling */}
              <div
                className={`absolute inset-0 flex items-center ${
                  index === 3 || index === 4 ? "justify-center" : "ml-20 md:ml-20 lg:ml-32"
                }`}
              >
                <div
                  className="text-white font-bold text-3xl md:text-4xl lg:text-5xl w-[40%] bg-blue-600 bg-opacity-50 p-4 rounded-lg animate-fadeInScale"
                  style={{
                    textAlign: index === 3 || index === 4 ? "center" : "left",
                  }}
                >
                  {slide.overlayText}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroSection;
