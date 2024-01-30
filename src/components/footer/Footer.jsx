import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterStyle.css"

const Footer = ({marginVal}) => {
  return (
    <div className={`footer-container py-5 ${marginVal}`}>
        <div className="contaier-fluid pt-5">
            <div className="container m-auto">
                <footer className="mx-4">
                    <div className="row gap-5">
                    <div className="col-12 col-md">
                    <Link to="/" className="d-flex text-decoration-none text-dark">
                        <h1 className='text-white'>
                            <FontAwesomeIcon
                            className="me-3"
                            style={{ color: "#FDA12B" }}
                            icon={faBuilding}
                            />
                            APEX
                        </h1>
                        </Link>
                        <small className="d-block mb-3 link-secondary mt-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</small>
                        <div className="social-wrapper">
                        <NavLink
                            to="https://youtu.be/mSUNnCwj1WY?feature=shared"
                            target="_blank"
                            >
                            <FontAwesomeIcon
                                className="icons"
                                icon={faLinkedin}
                            />
                            </NavLink>
                            <NavLink
                            to="https://youtu.be/mSUNnCwj1WY?feature=shared"
                            target="_blank"
                            >
                            <FontAwesomeIcon
                                className="icons"
                                icon={faXTwitter}
                            />
                            </NavLink>
                            <NavLink
                            to="https://youtu.be/mSUNnCwj1WY?feature=shared"
                            target="_blank"
                            >
                            <FontAwesomeIcon
                                className="icons"
                                icon={faFacebookF}
                            />
                            </NavLink>
                            <NavLink
                            to="https://youtu.be/mSUNnCwj1WY?feature=shared"
                            target="_blank"
                            >
                            <FontAwesomeIcon
                                className="icons"
                                icon={faInstagram}
                            />
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <h5 className='fw-bold fs-3 text-white mb-3'>Address</h5>
                        <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5 className='fw-bold fs-3 text-white mb-3'>Quick Links</h5>
                        <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5 className='fw-bold fs-3 text-white mb-3'>Newsletter</h5>
                        <p className='link-secondary mb-4'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative">
                        <input className="form-control bg-transparent signup-field w-100 p-3" list="datalistOptions" id="exampleDataList" placeholder="Your Email" />
                            <button className='btns px-3 py-2 position-absolute top-0 end-0 mt-2 me-2'>SingUp</button>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between border-top border-secondary mt-5 pt-4">
                    <p className='text-white'>© 2024 KidDev, <span className='link-secondary'>Inc. All rights reserved.</span></p>
                    <p className='text-white'> <span className="text-secondary">Rebuild by <span className='text-warning'>KidDev</span>.</span></p>
                
                    </div>
                </footer>
            </div>
        </div>
    </div>
  )
  
}

export default Footer