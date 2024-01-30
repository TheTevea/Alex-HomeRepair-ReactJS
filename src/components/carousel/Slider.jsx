import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderStyle.css";
import { Navigation,Autoplay } from "swiper/modules";
import CarouselImg1 from "../../assets/carousel-1.jpg";
import CarouselImg2 from "../../assets/carousel-2.jpg";



export default function App() {
  
  return (
    <div className="container-fluid">
      <div className="slider-cotainer">
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
            <img className=" d-block" src={CarouselImg1} alt="" />
            <div className="carousel-details h-100 w-100 position-absolute d-flex justify-content-center align-items-center flex-column">
              <div className="text-start details-container container">
                <div className="row justify-content-center">
                <div className="col-11 col-lg-10">
                <h5 className="text-light fs-3 fw-bold mb-3" data-aos="fade-down" data-aos-offset="10">WELCOME TO APEX</h5>
                <h1 className="text-light mb-3" data-aos="fade-down" data-aos-duration="800">A Construction & Renovation Company</h1>
                <ol className="breadcrumb mb-4 pb-2">
                  <li className="breadcrumb-item fs-5 text-light">Commercial</li>
                  <li className="breadcrumb-item fs-5 text-light">Residential</li>
                  <li className="breadcrumb-item fs-5 text-light">Industrial</li>
                </ol>
                <button className="btns">More Details</button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="position-relative">
            <img className=" d-block" src={CarouselImg2} alt="" />
            <div className="carousel-details h-100 w-100 position-absolute d-flex justify-content-center align-items-center flex-column">
              <div className="text-start details-container container">
                <div className="row justify-content-center">
                <div className="col-11 col-lg-10">
                <h5 className="text-light fs-3 fw-bold mb-3" data-aos="fade-down" data-aos-offset="10">WELCOME TO APEX</h5>
                <h1 className="text-light mb-3" data-aos="fade-down" data-aos-duration="800">Professional Tiling & Painting Services</h1>
                <ol className="breadcrumb mb-4 pb-2">
                  <li className="breadcrumb-item fs-5 text-light">Commercial</li>
                  <li className="breadcrumb-item fs-5 text-light">Residential</li>
                  <li className="breadcrumb-item fs-5 text-light">Industrial</li>
                </ol>
                <button className="btns">More Details</button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
