import React from "react";
import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="name">
          <div className="company">bdtc</div>
          <span>
            2021 <AiOutlineCopyrightCircle /> BDTC All right reserved
          </span>
        </div>
        <div className="nav">
          <a href="" className="navs">
            Home
          </a>
          <a href="" className="navs">
            Project
          </a>
          <a href="" className="navs">
            Service
          </a>
          <a href="" className="navs">
            Teams
          </a>
        </div>
        <div className="contacts">
          <Link to={"/contact"} className="con">
            Contact
          </Link>
          <a href="#" className="con">
            Telegram
          </a>
          <Link to={"/"} className="con">
            Testimonies
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
