import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import Hero from '../components/hero/Hero';
import Testiminal from "../components/testiminal/Testiminal";

const Testimonal = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero menuName="Testimonal"/>
      <Testiminal />
      <Footer marginVal="mt-5" />
    </div>
  )
}

export default Testimonal