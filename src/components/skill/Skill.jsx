import "./SkillStyle.css";
import SkillCart from "./SkillCart";
import SkillCardData from "../data/SkillCardData";

import React from "react";

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="container-fluid ">
        <div className="row">
          {SkillCardData.map((value,index)=>{
            return <SkillCart {...value} key={index} duraTime={index * 500 + 900}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
