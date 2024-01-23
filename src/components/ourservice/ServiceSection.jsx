import "./ServiceSection.css";
import ServiceImg1 from "../../assets/service-1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

const ServiceSection = () => {
  return (
    <div className="service-container d-flex justify-content-center">
        <div className="container">
        <div className="row p-3">
            <div className="col-lg-4 px-2 col-md-6">
                <div className="sv-cart">
                    <img src={ServiceImg1} className="w-100" alt="Service Image" />
                <div className="details text-center d-flex flex-column gap-3 p-4">
                    <h5>Building Construction</h5>
                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                    <button className="fs-6 btns-trans-orange text-uppercase">Read More <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></button>
                </div>
                </div>
            </div>

            <div className="col-lg-4 px-2 col-md-6">
                <div className="sv-cart">
                    <img src={ServiceImg1} className="w-100" alt="Service Image" />
                <div className="details text-center d-flex flex-column gap-3 p-4">
                    <h5>Building Construction</h5>
                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                    <button className="fs-6 btns-trans-orange text-uppercase">Read More <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></button>
                </div>
                </div>
            </div>

            <div className="col-lg-4 px-2 col-md-6">
                <div className="sv-cart">
                    <img src={ServiceImg1} className="w-100" alt="Service Image" />
                <div className="details text-center d-flex flex-column gap-3 p-4">
                    <h5>Building Construction</h5>
                    <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                    <button className="fs-6 btns-trans-orange text-uppercase">Read More <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></button>
                </div>
                </div>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default ServiceSection
