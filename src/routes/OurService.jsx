import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import ServiceSection from "../components/ourservice/ServiceSection";
import Hero from '../components/hero/Hero';
import AppointmentSection from '../components/appointment/AppointmentSection';
const OurService = () => {
  return (
    <div>
       <TopBar />
       <Navbar />
       <Hero menuName="Our Service"/>
       <ServiceSection paddingVal="pt-5"/>
       <AppointmentSection containerClass="pb-5 appointment-container" headColor="text-secondary" titlColor="text-dark" descColor="text-secondary" animationStyle="fade-up" durationAnima="1500" />
       <Footer />
    </div>
  )
}

export default OurService