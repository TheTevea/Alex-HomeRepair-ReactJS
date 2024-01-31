import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import "./NavbarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import React, { useEffect, useState } from "react";
import {
  faAngleDown,
  faArrowUpLong,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropd, setdropd] = useState(false);
  const [active,setActive] = useState(true);

  const [sticky, setsticky] = useState(false);
  const changeSticky = () => {
    if (window.scrollY >= 300) {
      setsticky(true);
    } else {
      setsticky(false);
    }
  };

  window.addEventListener("scroll", changeSticky);

  useEffect(() => {
    // Set active to false after the initial render
    setActive(false);
  }, []);

  return (
    <div className="container-fluid nav-animation sticky-top" style={{ top: sticky ? "0px" : "-100px" }} >
      <div className="header d-flex justify-content-between align-items-center px-3 px-lg-5">
        <Link to="/" className="d-flex text-decoration-none text-dark">
          <h1>
            <FontAwesomeIcon
              className="me-3"
              style={{ color: "#FDA12B" }}
              icon={faBuilding}
            />
            APEX
          </h1>
        </Link>
        <ul className={click? "nav-menu toggle d-flex list-unstyled gap-4" : "nav-menu d-flex list-unstyled gap-4"}>
          <li>
            <NavLink className={active ? "text-decoration-none active" : "text-decoration-none"} to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-decoration-none" to="/aboutus" >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="text-decoration-none" to="/ourservice">
              Our Service
            </NavLink>
          </li>
          <li className="d-flex align-items-center page gap-1 position-relative py-4" onClick={()=>setdropd(!dropd)}>
            Page
            <FontAwesomeIcon
              className="mt-1 position-relative"
              icon={faAngleDown}
            />
            <ul className="list-unstyled page-dropdown">
              <li><NavLink className="text-decoration-none" to="/feature">
              Feature
            </NavLink></li>
              <li><NavLink className="text-decoration-none" to="/appointment">
              Appointment
            </NavLink></li>
              <li><NavLink className="text-decoration-none" to="/testimonal">
              Testimonal
            </NavLink></li>
            <li><NavLink className="text-decoration-none" to="/ourteam">
              Our Team
            </NavLink></li>
            </ul>
          </li>
          
          <li>
            <NavLink className="text-decoration-none" to="/contactus" >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div
          className="hamburger d-block d-lg-none"
          onClick={() => setClick(!click)}
        >
          {click ? (
            <FontAwesomeIcon className="fs-2 hamburger-icon" icon={faXmark} />
          ) : (
            <FontAwesomeIcon className="fs-3 hamburger-icon" icon={faBars} />
          )}
        </div>
      </div>
      <button className={`position-fixed top-button bottom-0 end-0 m-5 ${sticky ? "d-flex" : "d-none"}`}  onClick={()=> window.scrollTo({ top: 0,behavior: "smooth",})}><FontAwesomeIcon className="fs-5" icon={faArrowUpLong} /></button>
    </div>
  );
};

export default Navbar;
