/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="bg-[#f3ebe5]">
     <Hero />
     <AboutUs />
     <Features />
     <HowItWorks />
     <Footer/>

    </div>
  );
}

export default LandingPage;