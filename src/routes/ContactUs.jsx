import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import TeamDesc from "../components/teamDesc/TeamDesc"
import Hero from '../components/hero/Hero';
import ContactSection from '../components/contactSection/ContactSection';

const ContactUs = () => {
  return (
    <div>
       <TopBar />
       <Navbar />
       <Hero menuName="Contact Us"/>
       <TeamDesc />
       <ContactSection />
       <Footer />

    </div>
  )
}

export default ContactUs