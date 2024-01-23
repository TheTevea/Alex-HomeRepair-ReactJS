import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import OurService from "./routes/OurService";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourservice" element={<OurService />} />
      </Routes>
    </>
  );
};

export default App;
