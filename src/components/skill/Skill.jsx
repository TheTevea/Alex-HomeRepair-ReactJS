import "./SkillStyle.css";
import SkillCart from "./SkillCart";
import SkillCardData from "../data/SkillCardData";

import React from "react";

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="container-fluid bg-info ">
        <div className="row">
          {SkillCardData.map((value,index)=>{
            return <SkillCart {...value} key={index}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
