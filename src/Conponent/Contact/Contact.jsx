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
            <img
              src="https://s3-alpha-sig.figma.com/img/76b4/3b09/865b2284e26f73ccf558c08de1becc45?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~vnLtDYDyyPQIKhHmD1gjz4OmdK~kMeTW12~dXIPtx6iJ2X6yl-Ab-rFbhE8MtdZmSSBqslyhnpE9n97mBuVHOR64AL4ZUxZJrZrhAvOnen2ntEDjuBg0HiwnobDX89tTupdhKRi6LR3DkMpjnseZ33dTkyAAA2RpPgRC0O8ttzLauvHHdXGCSJ9eCHsqB-qMnJj2YKs6x6j3JSFpOffM8J20QDsXWmhPMn5b-mRQV8iaNUI9q3cKhWonLHgyQuBNzoVvdpY56~6fEZX1O5Kgoypbt7u3EOeCWz-7mRiRwCbAO5mBhOBqHXdgjcygrTRuOzyyDPMCZuhiKrLNVwbg__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>

          <a href="https://t.me/Crypto_boy122">
            <img
              src="https://s3-alpha-sig.figma.com/img/487a/578e/eeeeabd7ef0444176c086e79f3024119?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~DIWg7PnEPMsZVUsnIRM~15TspSFMFMVCQkzlVDFUQZkBxADIC7gWTXZunP~LlNLLn4tkZ6okliaBz8aIsASXhLtRR1J3Os7M1VljmCyNZAmgsvv50GgBPJL0CPatC075TmaNEW-37U-d5o~m-JKz2y-Hrs-exRplQ2vv-kShf0GwoV7inUEoxlnJ3K2tKeoyeT9xP~3kA5T2a51cHqmuw7AuNjF05NldXRj4tBp0kf0bGK-zMPi8N6oPn9gloPakbBpr~F2xLWZz7KQH~GihCUyS9DavxyOwxc~VLRukQwgmDyII5-9Z19RZftCqQQ~gduod~1RPUyyRS6nfaecg__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/Wen_100x">
            <img
              src="https://s3-alpha-sig.figma.com/img/644a/48d4/fa7c71904f6f1d1b4fab3da164b6b415?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMW75VNeF0z~G1bS~RT7sN34~LXagGGdDppcEwt~U5jxj-zVN4l~8kAAQJpvw~Lcus3Ria0fP9qis9zd7B1iGz60WEiYg3O0OsiY~qLSclMzfxRMnzvcG1dFaDZNBVArWd8-kXp-78et6VrhX2vPDoBEGmz0y2QhS1~I9S1TpAm0KFsDIpJoXLFfYVqUGKBP70klJTo~EX8VEmI8hUafEQZL2Fbldw81IyIsImjlsgir4djogwyjpK8OCEtCZmw3iXUOF5mB718rCX~ddiZLgivqkPkjQKOHianiz3adyITqzinqZ57yW9J7p94E-9SMkue5n4ecemGpcRCgPBlMKA__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/Nizzan_GTR">
            <img
              src="https://s3-alpha-sig.figma.com/img/a03c/0463/3dfe25fc9a2132c335c1cb2806af5a1a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzP4c7AA-WT-poFaynjTii8tGCLc8AXxuK6br1j5B80-137MlO1Ri53yKPpukCWv~GL~cjBVLoHsowy60mxUx6hyCMe6wDqhYZ3e0uN1taFhy3dHl66nx2CKtmXy-tKRv6aGJXCPpWb31kIp~-7ZdcalK1FN4CkmcjrfYzxZmdWiVLiy~OgWpXBeCuDi16qOE94ozlb6CUKY-yG0etHH30we2kRtbRtAVqFnMn06jNn0mAB0GAWUmQcmzQAVkqd3yWsZVBQ5HPHOLapGuLuyCRdK4nqj3voK2mYE7yq4cEp3zBMUld4-OrTpDLevjeyOCiRYuzTajpXRuJuxr4-Sxg__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/KM_Crypton">
            <img
              src="https://s3-alpha-sig.figma.com/img/4956/8649/27616ede75098f47f3bd62b62596f600?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcZkS7ZQ3vIS0LUk49~JLPcmrLihT0LcUVxOlbJjRppL~UQdRZheRgcM2txAmYDT9zNuqwHt4ookdTboTayWe1F2qKhQKpqs-tSl358-GaeuezmaMsxoAlMReh-gv6sjAYQvVLP2fEhotgVoBcsxMsOJvsKzA4g~nqWDv-O~RzZtOZ9LH0ovCOfE9jIwCExhQlMBMmo29j7hmHX0OY-H-jcisCuT7IHu4YTDrQid8DhjYDrPoR0KF3jX346ExPQ41Z1MJx-~QngjQB7sf0OKQ5KGnDbEqYrjX1exj1~-cBoBtIYCBdrFgUg59utaleCG4tKO0oiGcViLgHGGo48j6g__"
              alt=""
              className="rounded-full w-[120px]"
            />
          </a>
          <a href="https://t.me/Osmosiofficial">
            <img
              src="https://s3-alpha-sig.figma.com/img/3bb4/022c/a34886ba8e60e551ad371309784ad8db?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmN7QNWJ7sDxgeTqwheqQpXuWK3Qmrw1yXUijB5OgDafei5x1QQpnAR2NV9Kx8KJ19Q9m6HEyl6lCPaWTf70ZBuRtMrBFsr4JhXmAL2kITlWnMI8A1BalURYBk4YYdeRGzdguBMo8iaPvleYVknhrTaQKhhyWWYGwt32SvntXexVs~TutVP5lTiuiP-hw9tZdCqNzqA3Qq4hJMbY7nWvGt9KKxB-kjFqIWnhYcCo9eXq9qqZtp7McW2tkFNjk7ruqz4Zk8O1BvcPo3PN6fnA4SHjxsxFtFtppngYYJGz9klb7CW1LwjsTZln4VdujcdurS-qlIqPOmCi2mNHRUwgyQ__"
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
