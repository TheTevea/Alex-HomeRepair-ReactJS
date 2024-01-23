import "./AppointmentStyle.css";
import HeadTag from "../headtag/HeadTag";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import React from 'react'

const AppointmentSection = () => {
  return (
    <div className="appointment-container py-5">
        <div className="container-fluid py-5 d-flex justify-content-center">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 px-3">
                <HeadTag tagName="about us" text="Unique Solutions For Residentials & Industries!"/>
                <p className="text-white mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                </div>
                <div className="col-lg-6 px-3">
                    <div className="row">
                        <div className="col-sm-6 px-2 pb-2">
                            <input type="text" name="" id="" placeholder="Your Name" className="w-100 p-3"/>
                        </div>
                        <div className="col-sm-6 px-2 pb-2">
                            <input type="text" name="" id="" placeholder="Your Email" className="w-100 p-3" />
                        </div>
                        <div className="col-sm-6 px-2 pb-2">
                            <input type="text" name="" id="" placeholder="Your Mobile" className="w-100 p-3"/>
                        </div>
                        <div className="col-sm-6 px-2 pb-2">
                            <input type="text" name="" id="" placeholder="Service Type" className="w-100 p-3" />
                        </div>
                        <div className="col-md-12 px-2 pb-2">
                            <textarea className="w-100 p-3" name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
                        </div>
                        <div className="col-md-12 px-2">
                            <button className="btns w-100 p-3">Get Appointment</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default AppointmentSection
