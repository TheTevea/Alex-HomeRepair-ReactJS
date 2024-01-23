import React from "react";
import TopBar from "../components/topbar/TopBar";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/carousel/slider";
import About from "../components/about/AboutSection";
import Skill from "../components/skill/Skill";
import WhyUs from "../components/whychooseus/WhyUs";
import ServiceSection from "../components/ourservice/ServiceSection";


const home = () => {
  return (
    <div>
     <TopBar />
     <Navbar />
     <Slider/>
     <About />
     <Skill />
     <WhyUs />
     <ServiceSection />

    </div>
  );
};

export default home;
