import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <>
      <div class="pt-[60px]">
        <img src="/logo.png" alt="" class="w-[100%] h-[300px]" />

        <div class="flex justify-between items-center px-[20px]">
          <img
            src="/1b.jpeg"
            alt=""
            class="w-[122px] h-[122px] rounded-full hover:border-[#778899] hover:border-4"
          />
          <Link
            to={"/team"}
            class="bg-[#01c300] text-center p-[10px] max-md:p-[15px] tracking-[2px] rounded-[20px] text-[#fff] "
          >
            Connect
          </Link>
        </div>
        <div class="p-[30px] grid grid-cols-2	gap-[30px] max-md:grid-cols-1">
          <div class="flex flex-col gap-[1rem]">
            <img
              src="/2b.jpeg"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[1.2rem] font-bold text-center items-center leading-3	">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                CEO
              </div>
              100mc
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="/2a.jpeg"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[0.9rem] font-bold text-center items-center leading-3	">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                CFO
              </div>
              Crypto boy
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="/2d.jpeg"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] text-center items-center max-md:text-[0.9rem] font-bold leading-3	">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                ED
              </div>
              Wen 100x
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="/2c.jpeg"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[1.2rem] leading-3 font-bold text-center items-center">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                MD
              </div>
              Crypton.Eth
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="/2f.jpeg"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[1.2rem] font-bold text-center items-center leading-3">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                SPM
              </div>
              Km Crypton
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="/2e.jpeg"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] leading-3 text-center items-center max-md:text-[1.2rem] font-bold">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                SPM
              </div>
              Nizzan GTR
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
