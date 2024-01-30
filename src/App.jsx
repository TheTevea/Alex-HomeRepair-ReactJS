import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import OurService from "./routes/OurService";
import Feature from "./routes/Feature";
import Appointment from "./routes/Appointment";
import Testimonal from "./routes/Testimonal";
import OurTeam from "./routes/OurTeam";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourservice" element={<OurService />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/testimonal" element={<Testimonal />} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
    </>
  );
};

export default App;
