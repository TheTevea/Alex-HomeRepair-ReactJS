import React from "react";
const ourteam = ({ teamImgSrc, name, skill }) => {
  return (
    <>
      <div className="col-lg-4 px-3 col-md-6">
        <div className="team-card position-relative">
          <img src={teamImgSrc} className="w-100" alt="" />
          <div className="our-team-text p-4 bg-white w-75 position-absolute">
            <h5>{name}</h5>
            <span className="text-secondary">{skill}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ourteam;
