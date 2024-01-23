import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

const ServiceSection = ({ServiceImgSrc,title,text}) => {
  return (
    <>
    <div className="col-lg-4 p-2 col-md-6">
        <div className="sv-cart">
            <img src={ServiceImgSrc} className="w-100" alt="Service Image" />
        <div className="details text-center d-flex flex-column gap-3 p-4">
            <h5>{title}</h5>
            <p>{text}</p>
            <button className="btns-trans-orange text-uppercase">Read More <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></button>
        </div>
        </div>
    </div>
    </>
  )
}

export default ServiceSection
