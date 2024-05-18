import React from "react";
import Footer from "../Footer/Footer";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            Name
          </span>
          <input
            type="text"
            className="rounded-[20px] w-[296px] p-[10px] text-[#000] bg-[#fff] outline-0 text-[1.2rem] font-extrabold"
          />
        </div>
        <div className="flex flex-col gap-[2px] text-left">
          <span className="Poppins text-[20px] font-bold tracking-wide">
            Email
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
      <div className="mt-[3rem] bg-[#353535DB] flex flex-col justify-center text-center items-center p-[40px] gap-[2rem]">
        <h1 className="text-[2rem] font-extrabold tracking-[4px]">Visit Us</h1>
        <div className="flex gap-[2rem]">
          <a href="https://bdtclive@gmail.com">
            <MdEmail className="text-[2.5rem]" />
          </a>
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
            <img
              src="https://s3-alpha-sig.figma.com/img/76b4/3b09/865b2284e26f73ccf558c08de1becc45?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxQPa2xE9cY8MxG3eHyXN3LOS9cpMKA3Eq7gI5S1nkslLsGozkQc~hILQLJPMv5aOxvyK8N-A5z32b5eTFFlSGBjqG5rNnrQoOHxk8HAHVRZmuyoLjgc15dIpHvG2SiSi3WCf4T8AF6nH-AeGMOXyyG-OCMPHMw6tY1qP2Go3KUhT1WIA-iWiXN303kyJtmCEcHkqbWgqEzXUjMpMunIJPDmsT8YEOLu1W40k8F7hp8pfOQdoXnfZcjrBwlkSLWO~q0YMjmrD6Gzl2zDDV31UuxwxBnQND~9Cl73qaiEDrWEIM3g3qWBHXBfO5UwkzQmR9YUx~HNmq-4CGSm~fdwKw__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>

          <a href="https://t.me/Crypto_boy122">
            <img
              src="https://s3-alpha-sig.figma.com/img/487a/578e/eeeeabd7ef0444176c086e79f3024119?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L6~X25W1mVu9ga0g988H9JSwpWDlf3EF3NxrMm0FgU49iZjEiUjkN985y~du9GeVI1zsS-Y-88C0-VzdBz2UzBIDR4VHug5yUDHXXVTy3ufuaoEc1fCeXSFOUcuiJIwldokB-KhqeRA~f84h-kcB20PX-KhF1OHRxmj~mseu1MxtpJ1GBF8uVEq3LTsJOLrSkQmXkIZBK-sYK-aNp726PFmoLPCO1fvhqZhvuA0E5lIuvXgkKjhDo2IPW94i8EctSVWIVh5CkzA2Kg1xlhVoVJVdnZbtFQzv6U8r38eyWJyGvutWMb2b0X7CVcc28mI0mSTeVxZETQ~65F7SH~FLSw__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/Wen_100x">
            <img
              src="https://s3-alpha-sig.figma.com/img/644a/48d4/fa7c71904f6f1d1b4fab3da164b6b415?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIhmUGP3uZV7meCkCX1RY6txgfNOuu6OCEPjs3QQKarCvfMdJ-xQQaPc96Ao4hKqWmeVEK1E~tOUIWsEV7pubInBTo7wqUn2tTlvO4W0C73zBWDWDJ~eA606RZr4SeOcIwJcBpEA0ikaMpmMn1I5vRau1GviUx2lLXz4Ko27BPoIGqYc9ScMQGrFEtmnQngAasV6Uughl94wVJL3R4j2cXVHCe4bemPlF-OkyZkoxRfTZL~K2cG8xu9Bwig~VdFORV~AUGSpJd758Sbhi~GLe1xirgDMR2RD5xKcLZRTr4C0t-eQpoZuQZMuGFt5oVW9LCid1XK4B5MG0prA9mUAjg__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/Nizzan_GTR">
            <img
              src="https://s3-alpha-sig.figma.com/img/a03c/0463/3dfe25fc9a2132c335c1cb2806af5a1a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oBJ5Nh3HfQJMz8e4IQuCaNqzfOgCql1HsVRNzvhDTsjJ7WyJAuff-3eY1xN-d6H3YKneKBw-AWpYiOx670G-V2bo5QDmrr7-o6xB8S6CRdHPqD43x3Fs9-LfnJnqdEUJxtehZJVrEowX8Ad3AhT~Rl-gQsGW9QXPNoL3ZR6kEgRAM1jrowMA3yUyrYbdaFA~Ki3~5sQZaqmhCMy~NuLub1hhI-5vwvlUrV-9CNVyRSa5OzTM-lMbkRlzOM7T6z1XdK0dgjWuhJbCuDixbbxElCtX9oOTwTnm5TGz1MAXvtqmfUuK9PdUijraPptfTbPJt9hrgXDVIWZFdG-ELxDUXg__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/KM_Crypton">
            <img
              src="https://s3-alpha-sig.figma.com/img/4956/8649/27616ede75098f47f3bd62b62596f600?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkkqcArSUz4IC9AA9iguiBSTgxOfVoukV4JvdRMh-LXR1vVtTczl7JKJrtuucqBY4Vejx0Qfzf2VgPVakAfUKMtBAGMUnqWzPTcpzEkYmZOjdVGpX~Qkmbgqf-2QhZRDK0o37284T~ohwJIsSUmaQNyUe2jFR4IWWAYKM-rDFBv6vj~kUZMa8e34mcEgRJULwPo7TTosWETtmB~Uq2DUF-SaBql2L~DGzk9eAmYma5pu9FVj7PsC0QNkdd0boH-fOarz2HgGlCQheAVMdRpDaD11agHDIfNy367x9rzOva9u-CsUhqA4pwbV5KkyaFL1BzcMDkPmG9478lkV0TENPQ__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/Osmosiofficial">
            <img
              src="https://s3-alpha-sig.figma.com/img/3bb4/022c/a34886ba8e60e551ad371309784ad8db?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0v2Oyn-Xqw236ge2mtptoh0pIOyNhTdJz~aNnIu9n-9EoLRwaR318mxIcoaUjwyP0GISPOrBMxzXZZLL8S61PB92OuZtOOjh-LiC4gm8Eqt2LwmhT9Cj9sbp66UBI7hsoN46UKBjetgrDz~NsACSb~K-X7ixhxPtnhStbl6X~hi1~uZlBB5iMbn0FLVD9Jj1SiU1PkdbKYe~mMPvR7x5cMFCrina~6ZsKb4-Ad5yo6EkcVFfR3FJuHOmD5CEeLloPm1XgQ2Lx-S4LO8kcUHXXWmpNAMYdSW9oWL3xeCiwx-jefO5gW9knOpZRqTDNflQ7nryd5MoRhMDnAThF1jKA__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
