import React from "react";
import TopBar from "../components/topbar/TopBar";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/carousel/slider";
import About from "../components/about/AboutSection";
import Skill from "../components/skill/Skill";
import WhyUs from "../components/whychooseus/WhyUs";
import ServiceSection from "../components/ourservice/ServiceSection";
import AppointmentSection from "../components/appointment/AppointmentSection";


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
     <AppointmentSection />

    </div>
  );
};

export default home;
