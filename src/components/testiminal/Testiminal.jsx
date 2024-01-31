import "./TestiminalStyle.css"
import HeadTag from "../headtag/HeadTag"

import TestiminalImg1 from "../../assets/testimonial-1.jpg"
import TestiminalImg2 from "../../assets/testimonial-2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

// swiper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
// swiper

const Testiminal = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="testiminal-container d-flex justify-content-center">
        <div className="container">
            <div className="row p-4">
                <div className="col-lg-5 pe-4" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="500" >
                <HeadTag tagName="TESTIMONIAL" text="What Our Happy Clients Say!"/>
                <p className="text-secondary">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row text-start my-4">
                <div className="col-sm-6 mb-4 left result-text">
                    <h1>
                    <FontAwesomeIcon icon={faUsers} className="pe-3 icon-color" />
                    <span className="fw-bold">123+</span>
                    </h1>
                    <p className="mt-2 fs-5">Happy Clients</p>
                </div>
                <div className="col-sm-6 mb-4 result-text ">
                    <h1>
                
                    <FontAwesomeIcon className="pe-3 icon-color" icon={faCheck} />
                    <span className="fw-bold">123+</span>
                    </h1>
                    <p className="mt-2 fs-5">Happy Clients</p>
                </div>
                </div>
                </div>
                <div className="col-lg-7 pe-4 right" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="1500" >
                    <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    loop={true}
                    navigation={true}
                    modules={[ Navigation,Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 3000 }}
                    speed={800}
                    >
                    <SwiperSlide className="position-relative">
                        <div className="d-flex flex-column">
                            <img src={TestiminalImg1} alt="Testiminal Image" />
                            <p className="text-secondary text my-4 fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd
                            labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                            et labore et tempor diam tempor erat.</p> 
                            <span className="borders"></span>
                            <div className="testiminal-text">
                                <h5 className="name py-2">Client Name</h5>
                            <p className="text-secondary">Profession</p>
                            <div className="py-5"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="position-relative">
                        <div className="d-flex flex-column">
                            <img src={TestiminalImg2} alt="Testiminal Image" />
                            <p className="text-secondary text my-4 fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd
                            labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                            et labore et tempor diam tempor erat.</p> 
                            <span className="borders"></span>
                            <div className="testiminal-text">
                                <h5 className="name py-2">Client Name</h5>
                            <p className="text-secondary">Profession</p>
                            <div className="py-5"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Testiminal