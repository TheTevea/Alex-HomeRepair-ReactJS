import "./HeroStyle.css"

import React from 'react'

const Hero = ({menuName}) => {
  return (
    <div className="container-fluid mb-5">
        <div className="hero-img w-100 position-relative">
            <div className="heading w-100 h-100 d-flex justify-content-center flex-column align-items-center gap-4">
                <h1 className="text-light fw-bold" data-aos="fade-down"
     data-aos-delay="30" data-aos-duration="700" >{menuName}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb textde">
                    <li className="breadcrumb-item "><a className="text-decoration-none text-light" href="#">Home</a></li>
                    <li className="breadcrumb-item "><a className="text-decoration-none text-light" href="#">Page</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{menuName}</li>
                  </ol>
              </nav>
            </div>  
        </div>
    </div>
  )
}

export default Hero