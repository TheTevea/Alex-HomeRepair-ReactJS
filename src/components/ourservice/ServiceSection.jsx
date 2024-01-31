import "./ServiceSection.css";
import ServiceData from "../data/ServiceData";
import ServiceCard from "./ServiceCard";
import HeadTag from "../../components/headtag/HeadTag";

import React from 'react'

const ServiceSection = ({paddingVal}) => {
  return (
    <div className={`service-container pb-5 d-flex justify-content-center ${paddingVal}`}>
        <div className="container">
        <div className="row px-4">
            <div className="col-lg-6" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="500" >
            <HeadTag tagName="OUR SERVICES" text="Construction And Renovation Solutions"/>
            </div>
            <div className="col-lg-6 text-lg-end" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="1000" >
            <button className="btns mt-lg-5">More Details</button>
            </div>
        </div>
        <div className="row px-3 py-lg-0 pt-5">
            {ServiceData.map((value,index)=>{
                return <ServiceCard {...value} key={index} duraTime={index * 200 + 500}/>
            })}
        </div>
        </div>
  </div>
  )
}

export default ServiceSection
