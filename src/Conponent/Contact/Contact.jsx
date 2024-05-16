import React from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div class="pt-[9rem] text-center">
        <h1 className="max-md:text-[1.5rem] text-[2.5rem] font-[900] leading-6 uppercase text-center">
          contact
        </h1>
        <span className="text-center text-[#fff] Poppins text-[1rem] font-bold tracking-wide">
          Get in touch with us. We are here to boost your project for devs/
          influencers attention.
        </span>
      </div>
      <form
        action=""
        className="flex flex-col gap-[10px] p-[20px] text-center items-center"
      >
        <div className="flex flex-col gap-[2px] text-left">
          <span className="Poppins text-[20px] font-bold tracking-wide">
            Our Name
          </span>
          <input
            type="text"
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>
        <div className="flex flex-col gap-[2px] text-left">
          <span className="Poppins text-[20px] font-bold tracking-wide">
            Our Email
          </span>
          <input
            type="email"
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>
        <div className="flex flex-col gap-[2px] text-left">
          <span className="Poppins text-[20px] font-bold tracking-wide">
            Subject
          </span>
          <input
            type="text"
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>

        <button
          type="submit"
          className="mt-[3rem] rounded-full text-center w-[316px] p-[20px] bg-[#01c300] text-[#fff] text-[1.3rem] mb-[3rem]"
        >
          Send Message
        </button>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
