import "./TopBarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <div className="container-fluid ">
      <div className="topbar-container d-none d-lg-block">
        <div className="topbar m-0 d-flex justify-content-between px-5 align-items-center">
          <div className="left d-flex">
            <h4 className="border-start">
              {" "}
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span>+012 345 6789</span>
            </h4>
            <h4 className="border-start">
              {" "}
              <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" />
              <span>info@example.com</span>
            </h4>
            <h4 className="border-start border-end d-none d-lg-block">
              {" "}
              <FontAwesomeIcon icon={faClock} className="me-2" />
              <span>Mon - Fri : 09 AM - 09 PM</span>
            </h4>
          </div>
          <div className="right d-flex">
            <NavLink
              to="https://youtu.be/mSUNnCwj1WY?feature=shared"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icons border-start"
                icon={faLinkedin}
              />
            </NavLink>
            <NavLink
              to="https://youtu.be/mSUNnCwj1WY?feature=shared"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icons border-start"
                icon={faXTwitter}
              />
            </NavLink>
            <NavLink
              to="https://youtu.be/mSUNnCwj1WY?feature=shared"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icons border-start"
                icon={faFacebookF}
              />
            </NavLink>
            <NavLink
              to="https://youtu.be/mSUNnCwj1WY?feature=shared"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icons border-start border-end"
                icon={faInstagram}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
