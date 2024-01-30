import React from 'react'
import TopBar from "../components/topbar/TopBar";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import Hero from '../components/hero/Hero';
import Ourteam from "../components/ourteam/ourteam";
import OurTeamData from "../components/data/OurTeamData";
import OurTeamCard from "../components/ourteam/OurTeamCard";

const OurTeam = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero menuName="Our Team"/>
      <Ourteam marginTopSize="mt-5"/>
      <div className="d-flex justify-content-center pb-5">
        <div className="container pb-5">
            <div className="row p-2">
                {OurTeamData.map((val,ind)=>
                {return <OurTeamCard {...val} key={ind}/>}
                )}
            </div>
        </div>
    </div>
      <Footer />
    </div>
  )
}

export default OurTeam