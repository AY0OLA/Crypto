import React from "react";
import Footer from "../Footer/Footer";
import { Test } from "../../Testimonies";

const Service = () => {
  return (
    <div className="pt-[150px]">
      <div className="px-[2rem] grid max-md:grid-cols-1 grid-cols-2 gap-[10px] justify-center max-md:items-center">
        <div className="">
          <div className="flex flex-col gap-[10px]">
            <span className="font-extrabold max-md:text-[1rem] text-[2rem] tracking-[3px]">
              PROJECT MC
            </span>

            <div className="flex flex-col gap-[10px]">
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] max-md:text-[0.8rem] text-center">
                $CRESO - $124M MC
              </div>
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] text-center max-md:text-[0.8rem]">
                $TROLL - $128M MC
              </div>
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] text-center max-md:text-[0.8rem]">
                $DGI - $81M MC
              </div>
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] text-center max-md:text-[0.8rem]">
                $KIZUNA- $58M MC
              </div>
            </div>
          </div>
          <div className="my-[3rem] gap-[2rem] p-[20px] items-center flex flex-col rounded-[50px] md:w-[500px] border-4 border-[#817f7fde]">
            <div className="text-left items-lastbase max-md:text-[1rem] text-[2rem] font-extrabold tracking-[6px]">
              TESTIMONIES
            </div>
            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-[20px]">
              {Test.map((tests) => {
                return (
                  <div key={tests.id} className="gap-[20px]">
                    <img
                      src={tests.img}
                      alt=""
                      className="w-[248px] h-[299px] cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>

            {/* <button className="bg-[#01c300] rounded-full max-md:p-[15px] p-[10px] text-center items-center">
              View More
            </button> */}
          </div>
        </div>
        <div className="md:mt-[3rem] flex flex-col gap-[20px] flex-nowrap">
          <h1 className="text-[2rem] font-bold tracking-[5px] max-md:text-[1rem]">
            RECENT WORKS
          </h1>

          <div className="bg-[#353535db] rounded-[100px] max-md:px-[20px] p-[50px] flex flex-col gap-[10px] items-center">
            <span className="text-[1.3rem] max-md:text-[.9rem] font-medium tracking-[3px]">
              Better Days Through Crypto has been at the forefront of the crypto
              industry, bringing innovative solutions to help our clients
              succeed. our projects have been instrumental in driving success
              for many businesses, and we are proud of the result we deliver.
              Explore our recnt projects below and see for yourself how we are
              changing the game throught crypto marketing{" "}
            </span>
            <div className="grid grid-cols-2 gap-[10px]">
              <img src="/kizu.jpeg" alt="" />
              <img src="/chinu.jpeg" alt="" />
              <img src="/Troll.jpeg" alt="" />
              <img src="/Creso.jpeg" alt="" />
              <img src="/bi.jpeg" alt="" />
              <img src="/chinu.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[8rem] bg-[#353535db] p-[20px] flex flex-col gap-[20px] text-center justify-center items-center">
        <h1 className="Poppins md:text-[2rem] max-md:text-[1.2rem] font-extrabold tracking-[8px]">
          {" "}
          WHAT DEVS ARE SAYING
        </h1>
        <div className="Poppins md:w-[1000px] text-center text-[1.2rem] max-md:text-[1rem] font-bold tracking-[2px]">
          Thank you so much for the amazing job you're doing! Your marketing
          efforts have exceeded our expectations in every way. Our community is
          growing rapidly, and the quality of engagement is top-notch. We've
          seen a significant increase in token sales and partnerships, and we're
          confident that your work will continue to drive our project's success.
          Your team's expertise, creativity, and dedication are invaluable to
          us. Keep shining - we're excited to see what the future holds for our
          project with your support
        </div>
      </div>
      <div className="my-[2rem] max-md:mx-[1rem] items-center text-center place-items-center">
        <video
          src="/3c.mp4"
          muted
          autoPlay
          className="md:h-[700px] w-[100%]"
        ></video>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
