import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import Hero from '../components/hero/Hero';
import AppointmentSection from '../components/appointment/AppointmentSection';

const Appointment = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero menuName="Appointment"/>
      <AppointmentSection containerClass="pb-5 appointment-container" headColor="text-secondary" titlColor="text-dark" descColor="text-secondary" />
      <Footer />
    </div>
  )
}

export default Appointment