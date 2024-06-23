import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jxdc5dx", "template_ybp0vwn", form.current, {
        publicKey: "1vTzDgZvgFH4jTrkc",
      })
      .then(
        () => {
          console.log("SUCCESS");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="pt-[9rem] text-center">
        <h1 className="max-md:text-[1.5rem] text-[2.5rem] font-[900] leading-6 uppercase text-center">
          contact
        </h1>
        <span className="text-center text-[#fff] Poppins text-[1rem] font-bold tracking-wide">
          Get in touch with us. We are here to boost your project for devs/
          influencers attention.
        </span>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-[10px] p-[20px] text-center items-center"
      >
        <div className="flex flex-col gap-[2px] text-left">
          <label className="Poppins text-[20px] font-bold tracking-wide">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>
        <div className="flex flex-col gap-[2px] text-left">
          <label className="Poppins text-[20px] font-bold tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>
        <div className="flex flex-col gap-[2px] text-left">
          <label className="Poppins text-[20px] font-bold tracking-wide">
            Message
          </label>
          <textarea
            name="message"
            required
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="mt-[3rem] rounded-full text-center w-[316px] p-[20px] cursor-pointer bg-[#01c300] text-[#fff] text-[1.3rem] mb-[3rem]"
        >
          Send
        </button>
      </form>
      <div className="mt-[3rem] bg-[#353535DB] flex flex-col justify-center text-center items-center p-[40px] gap-[2rem]">
        <h1 className="text-[2rem] font-extrabold tracking-[4px]">Visit Us</h1>
        <div className="flex gap-[2rem]">
          <a href="https://youtube.com/@BDTCLive?si=wDlrGIEWsJCYBjbC">
            <IoLogoYoutube className="text-[2.5rem] text-[red]" />
          </a>
          <a href="https://t.me/BDTCGEM">
            <FaTelegram className="text-[2.5rem] text-[#0ea5e9]" />
          </a>
          <a href="https://x.com/BDTCLive?t=nStat-HRGpkpJelwOjg6-Q&s=09">
            <FaXTwitter className="text-[2.5rem] text-[#000]" />
          </a>
        </div>
      </div>
      <div className="mt-[5rem] flex flex-col text-center justify-center items-center">
        <h3 className="text-[1.5rem] tracking-[8px] font-bold">
          CONNECT WITH TEAM
        </h3>
        <div className="my-[2rem] flex flex-wrap gap-[10px]">
          <a href="https://t.me/CEO100m">
            <img src="/2b.jpeg" alt="" className="rounded-full w-[120px]" />
          </a>
          <a href="https://t.me/Crypto_boy122">
            <img src="/2a.jpeg" alt="" className="rounded-full w-[120px]" />
          </a>
          <a href="https://t.me/Wen_100x">
            <img src="/2d.jpeg" alt="" className="rounded-full w-[120px]" />
          </a>
          <a href="https://t.me/Osmosi_official">
            <img src="/2c.jpeg" alt="" className="rounded-full w-[120px]" />
          </a>
          <a href="https://t.me/KM_Crypton">
            <img src="/2f.jpeg" alt="" className="rounded-full w-[120px]" />
          </a>
          <a href="https://t.me/Nizzan_GTR">
            <img src="/2e.jpeg" alt="" className="rounded-full w-[120px]" />
          </a>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
