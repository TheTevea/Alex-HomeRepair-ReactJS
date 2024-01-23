import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import "./NavbarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="container-fluid">
      <div className="header d-flex justify-content-between align-items-center px-5 py-3">
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
            <Link className="text-decoration-none active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/aboutus">
              About Us
            </Link>
          </li>
          <li className="d-flex align-items-center gap-1">
            Page
            <FontAwesomeIcon
              className="mt-1 position-relative"
              icon={faAngleDown}
            />
          </li>
          <li>
            <Link className="text-decoration-none" to="/ourservice">
              Our Service
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/contactus">
              Contact Us
            </Link>
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
    </div>
  );
};

export default Navbar;
