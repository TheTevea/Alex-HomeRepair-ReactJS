import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import Hero from '../components/hero/Hero';
import WhyUs from "../components/whychooseus/WhyUs";
import Testiminal from "../components/testiminal/Testiminal";

const Feature = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero menuName="Feature"/>
      <WhyUs />
      <Testiminal />
      <Footer marginVal="mt-5" />
    </div>
  )
}

export default Feature