import React from "react";
import TopBar from "../components/topbar/TopBar";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/carousel/Slider";
import About from "../components/about/AboutSection";
import Skill from "../components/skill/Skill";
import WhyUs from "../components/whychooseus/WhyUs";
import ServiceSection from "../components/ourservice/ServiceSection";
import AppointmentSection from "../components/appointment/AppointmentSection";
import Ourteam from "../components/ourteam/ourteam";
import Testiminal from "../components/testiminal/Testiminal";
import Footer from "../components/footer/Footer";


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
     <AppointmentSection containerClass="mt-5 py-5 bg-appointment-container" headColor="text-white" titlColor="text-white" descColor="text-white" />
     <Ourteam />
     <Testiminal />
     <Footer marginVal="mt-5"/> 
    </div>
  );
};

export default home;
