import "./SkillStyle.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SkillCart = ({factImgSrc,no,title,desc}) => {
  return (
    <>
    <div className="col-sm-6 col-xl-3 position-relative">
        <img className="w-100" src={factImgSrc} alt="Skill Image" />
        <div className="details gap-3 p-5 h-100 w-100 top-0 position-absolute d-flex justify-content-center align-items-start flex-column">
            <h1 className="fw-bold">{no}</h1>
            <h6 className="text-white fs-4">{title}</h6>
            <p className="text-white">{desc}</p>
            <button className="btns-trans text-uppercase ms-2">Read More <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </>
  );
};

export default SkillCart;
