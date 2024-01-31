import "./ourteam.css";
import HeadTag from "../headtag/HeadTag";
import OurTeamData from "../data/OurTeamData";
import OurTeamCard from "./OurTeamCard";

import React from 'react'

const ourteam = ({marginTopSize}) => {
  return (
    <div className={`d-flex justify-content-center ${marginTopSize ? marginTopSize : "my-5"}`}>
        <div className={`container ${marginTopSize ? marginTopSize : "my-5"}`}>
            <div className="row px-4">
                <div className="col-md-6 pe-4" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="500" >
                <HeadTag tagName="OUR TEAM" text="Our Expert Worker"/>
                </div>
                <div className="col-md-6 pe-4" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="1500" >
                    <p className="text-secondary">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                </div>
            </div>
            <div className="row p-2">
                {OurTeamData.map((val,ind)=>
                {return <OurTeamCard {...val} key={ind} duraTime={ind * 300 + 500} />}
                )}
            </div>
        </div>
    </div>
  )
}

export default ourteam
