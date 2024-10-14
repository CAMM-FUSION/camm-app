import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
Outlet;

const RootLayout = () => {
  return (
    <div>
      <HeroSection />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
