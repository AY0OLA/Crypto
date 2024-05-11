import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logoSpace">
        <img src="./src/image/logo.png" alt="" />
        <div className="logoName">
          <div>
            <span className="short">b</span>
            <span className="long">better</span>
          </div>
          <div>
            <span className="short">d</span>
            <span className="long">days</span>
          </div>
          <div>
            <span className="short">t</span>
            <span className="long">through</span>
          </div>
          <div>
            <span className="short">c</span>
            <span className="long">crypto</span>
          </div>
        </div>
      </div>
      <CgMenuGridO className="menu" />
      <div className="navBars">
        <FaRegTimesCircle className="times" />
        <div className="navItems">
          <ul>
            <Link to={"/"} className="li">
              Home
            </Link>
            <Link className="li" to={"/service"}>
              Project
            </Link>
            <Link to={"/project"} className="li">
              Service
            </Link>
            <Link to={"/team"} className="li">
              Contact
            </Link>
          </ul>
        </div>
        <a href="#" className="book">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
