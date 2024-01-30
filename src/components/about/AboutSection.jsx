import "./AboutStyle.css";
import BannerImg from "../bannerimg/BannerImg";
import AboutImg from "../../assets/about.jpg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HeadTag from "../headtag/HeadTag";
const About = () => {
  return (
    <div className="about-container overflow-hidden d-flex justify-content-center my-5">
        <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-12" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="500" >
          <BannerImg imgSrc={AboutImg}  imgSize="370px"/>
        </div>
        <div className="col-lg-6 col-12" data-aos="fade-up" 
     data-aos-delay="30" data-aos-duration="1500">
          <div className="right mx-4">
            <HeadTag tagName="about us" text="Unique Solutions For Residentials & Industries!"/>
            <div className="desc text-secondary">
              <p className="mt-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p className="my-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            </div>
            <hr />
            <div className="special-note d-flex">
              <div className="container">
              <div className="row">
                <div className="col-sm-4 d-flex p-2 justify-content-start align-items-center">
                <FontAwesomeIcon className="icon-color fs-1 p-2" icon={faCheck} />
                <h6 className="ms-1 lh-1">Ontime at services</h6>
                </div>
                <div className="col-sm-4 d-flex p-2 justify-content-start align-items-center">
                <FontAwesomeIcon className="icon-color fs-1 p-2" icon={faCheck} />
                <h6 className="ms-1  lh-1">24/7 hours services</h6>
                </div>
                <div className="col-sm-4 d-flex p-2 justify-content-start align-items-center">
                <FontAwesomeIcon className="icon-color fs-1 p-2" icon={faCheck} />
                <h6 className="ms-1  lh-1">Verified professionals</h6>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default About;
