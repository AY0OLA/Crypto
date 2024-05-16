import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="p-[70px] bg-[#353535db] flex flex-wrap gap-[30px] justify-between">
        <div className="">
          <div className="text-[1.3rem] uppercase tracking-[5px] font-extrabold">
            bdtc
          </div>
          <span className="text-[1rem] font-bold gap-[2px] flex-wrap items-center md:text-center flex">
            2021 <AiOutlineCopyrightCircle /> BDTC All right reserved
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <a
            href=""
            className="text-[#fff] text-[1.2rem] font-[700] no-underline	"
          >
            Home
          </a>
          <a
            href=""
            className="text-[#fff] text-[1.2rem] font-[700] no-underline	"
          >
            Project
          </a>
          <a
            href=""
            className="text-[#fff] text-[1.2rem] font-[700] no-underline	"
          >
            Service
          </a>
          <a
            href=""
            className="text-[#fff] text-[1.2rem] font-[700] no-underline	"
          >
            Teams
          </a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link to={"/contact"} className="text-[#fff] no-underline font-bold">
            Contact
          </Link>
          <a href="#" className="text-[#fff] no-underline font-bold">
            Telegram
          </a>
          <Link to={"/"} className="text-[#fff] no-underline font-bold">
            Testimonies
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
