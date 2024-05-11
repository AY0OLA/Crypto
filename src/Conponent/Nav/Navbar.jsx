import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logoSpace">
        <img
          src="https://s3-alpha-sig.figma.com/img/f73e/c525/34ddeb66be0b89dcad920fba0d323c96?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMYWtZk5a6NfxqW6OWjAnz50w-C6yL2T3XdWZhoRv8OrTJadXsAaPs7MyzWao1fKWKw~-r-V1krTZx8QmHe7KAFm8TIYKeEWYODLOZMT0iJRZRjsC~WKNJ1VRKCVuUb0adTJuFhy-MbTccYK5awxwjdhTFKK0q8SKoKfJE~NPI8PMqKI7SdiAF-v15TfWkYwlEvlV-QuzlXn9765MEar6CDvfOez4F9lqRuc0mANYGa3Ti157Wqrcpnxjp1Nwh2NQYLtIRE9VGB-RExzURbwnF~JTzXEsGqGJmbHpycg1Tqd2pcfkM1814xgV5-4HImZ7DpekYrMA8y4Um9yZxJi6g__"
          alt=""
        />
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
