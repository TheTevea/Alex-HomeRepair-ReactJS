import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import About from "../components/about/AboutSection";
import Ourteam from "../components/ourteam/ourteam";
import Footer from "../components/footer/Footer";

const AboutUs = () => {
  return (
    <div>
       <TopBar />
       <Navbar />
       <Hero menuName="About Us"/>
       <About />
       <Ourteam />
       <Footer /> 
    </div>
  )
}

export default AboutUs