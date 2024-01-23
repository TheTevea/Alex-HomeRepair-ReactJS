import "./WhyUsStyle.css";
import BannerImg from "../bannerimg/BannerImg";
import FeatureImg from "../../assets/feature.jpg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HeadTag from "../headtag/HeadTag";
const WhyUs = () => {
  return (
    <div className="whyus-container overflow-hidden my-5 d-flex justify-content-center">
        <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6  col-12">
          <div className="right mx-4">
            <HeadTag tagName="WHY CHOOSE US!" text="Our Specialization And Company Features"/>
            <div className="desc text-secondary">
              <p className="my-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            </div>
            <div className="special-note d-flex">
              <div className="container">
              <div className="row" >
                <div className="col-sm-6 pe-2">
                <div className="d-flex p-2 ps-0 justify-content-start align-items-center">
                    <FontAwesomeIcon className="icon-color fs-1" icon={faCheck} />
                    <h6 className="ms-2 lh-1 p-2">Large number of services provided</h6>
                </div>
                <p className="text-secondary">Magna sea eos sit dolor, ipsum amet ipsum lorem diam</p>
                </div>
                <div className="col-sm-6 pe-2">
                <div className="d-flex p-2 ps-0 justify-content-start align-items-center">
                    <FontAwesomeIcon className="icon-color fs-1" icon={faCheck} />
                    <h6 className="ms-2 lh-1 p-2">25+ years of professional experience</h6>
                </div>
                <p className="text-secondary">Magna sea eos sit dolor, ipsum amet ipsum lorem diam</p>
                </div>
                <div className="col-sm-6 pe-2">
                <div className="d-flex p-2 ps-0 justify-content-start align-items-center">
                    <FontAwesomeIcon className="icon-color fs-1" icon={faCheck} />
                    <h6 className="ms-2 lh-1 p-2">A large number of grateful customers</h6>
                </div>
                <p className="text-secondary">Magna sea eos sit dolor, ipsum amet ipsum lorem diam</p>
                </div>
                <div className="col-sm-6 pe-2">
                <div className="d-flex p-2 ps-0 justify-content-start align-items-center">
                    <FontAwesomeIcon className="icon-color fs-1" icon={faCheck} />
                    <h6 className="ms-2 lh-1 p-2">Always reliable and affordable prices</h6>
                </div>
                <p className="text-secondary">Magna sea eos sit dolor, ipsum amet ipsum lorem diam</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <BannerImg imgSrc={FeatureImg}  imgSize="450px"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyUs;
