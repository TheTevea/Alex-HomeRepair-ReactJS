
import TeamDescCard from "./TeamDescCard" 
import OurTeamData from "../data/TeamDescData"
import React from 'react'

const TeamDesc = () => {
  return (
    <div className="teamDesc-container pt-5">
        <div className="container mx-auto px-4">
            <div className="row" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="700" >
                {OurTeamData.map((val,ind)=>{
                    return <TeamDescCard {...val} key={ind} />
                })}
            </div>
        </div>
    </div>
  )
}

export default TeamDesc