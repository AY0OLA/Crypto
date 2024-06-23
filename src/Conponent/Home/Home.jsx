import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col pt-[8rem]">
        <span className="max-md:text-[1.5rem] text-[2rem] Poppins font-extrabold tracking-widest	text-center uppercase">
          Welcome to BDTC
        </span>
        <div className="image">
          <span className="text-[#fff] max-md:text-[2rem] text-[2.5rem] font-extrabold tracking-[10px] leading-[120%] z-[1] md:w-[750px]">
            ATTRACTING DESIRED AUDIENCE AND DELIVERING ON OBJECTIVES
          </span>
          <span className="z-[1] md:w-[750px] max-md:text-[1.4rem] text-[2rem] tracking-[4px] leading-[120%] font-normal">
            CREATING THE OPTIMAL BUZZ AND VIBE FOR YOUR BRAND AND PROJECTS
            WITHIN THE CRYPTO COMMUNITY
          </span>
        </div>

        <div className="p-[3rem] max-md:px-[.5rem] flex flex-col text-[#fff] text-[1.5rem] max-md:text-[1rem] font-medium">
          <span className="text-[2rem] max-md:text-[1.5rem] text-[#fff] font-bold tracking-[10px] mb-[1.5rem]">
            WHO WE ARE
          </span>
          Better Days Through Crypto is not just a marketing agency, but also
          community of crypto enthusiasts and professionals who are dedicated to
          supporting and overseeing the growth and productivity of your crypto
          project. Our team includes raiders, shillers, MODs, and graphic
          designers who all bring their unique talents and expertise to the
          table. We believe that through collaboration and hard work we can help
          bring your project to its full potential.
        </div>

        <div className="flex max-md:p-[0.2rem] p-[2rem] flex-col text-center items-center">
          <span className="text-[#fff] max-md:text-[1.5rem] text-[2rem] font-bold tracking-[4px] ">
            Promoted by BDTC
          </span>
          <div className=" gap-[10px] mt-[1rem] items-center grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center">
            <img src="/kizu.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/chinu.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/Troll.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/Creso.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/proj.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/3a.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/voip.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/3g.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/3e.jpeg" alt="" className="w-[190px] h-[170px]" />
            <img src="/ponke.jpeg" alt="" className="w-[190px] h-[170px]" />
          </div>
        </div>

        <div className="p-[3rem] max-md:px-[0.5rem] flex flex-col justify-center items-center gap-[20px]">
          <div className="flex gap-[30px] flex-wrap">
            <div className="flex flex-col ">
              <h1 className="md:w-[500px] text-[#fff] md:text-[3rem] max-md:text-[2rem]">
                Discover the power of Shilling
              </h1>
              <span className="text-[#fff] md:w-[250px] md:text-[1.5rem] text-[1rem] font-normal tracking-[4px]">
                Get upto 250+ pro shillers for your project.
              </span>

              <div className="flex flex-wrap gap-[30px] mt-[3rem]">
                <Link
                  to={"/team"}
                  className="rounded-[40px] bg-[#01c300] max-md:p-[15px] p-[10px] font-bold tracking-[2px] "
                >
                  Book Online
                </Link>
                <a
                  href="https://t.me/BDTCGEM"
                  className="rounded-[40px] bg-[#01c300] max-md:p-[15px] p-[10px] font-bold tracking-[2px]"
                >
                  Book On Telegram
                </a>
              </div>
            </div>
            <img
              src="/raid.jpeg"
              alt=""
              className="md:w-[639px] h-[450px] max-md:h-[300px]"
            />
          </div>
          <div className="flex gap-[30px] flex-wrap md:flex-row-reverse	">
            <div className="flex flex-col">
              <h2 className="md:w-[500px] md:text-[3rem] max-md:text-[2rem] text-[#fff] ">
                Secure Twitter, Telegram and Discord Promotions and Listing
              </h2>
              <span className="md:w-[600px]">
                We ensure your project gets the attention it deserves on
                twitter, telegram and others, our team uses strategic promotion
                techniques to attract developers and make your project trending.
              </span>
            </div>
            <img
              src="/bdtc.jpeg"
              alt=""
              className="md:w-[539px] h-[450px] max-md:h-[300px]"
            />
          </div>
          <div className="flex gap-[30px] flex-wrap">
            <div className="flex flex-col gap-[10px]">
              <h1 className="md:w-[500px] text-[#fff] md:text-[3rem] max-md:text-[2rem]">
                Boost your project visibility with BDTC hype
              </h1>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-nowrap	gap-[10px]">
                  <input type="radio" />
                  Provision for upto 250 Raiders/Shillers
                </div>
                <div className="flex flex-nowrap	gap-[10px]">
                  <input type="radio" />
                  Provision for Hype men for projects
                </div>
                <div className="flex flex-nowrap gap-[10px]">
                  <input type="radio" />
                  Project call on all socials including telegram channel 12k+
                  subscribers and official X account.
                </div>
              </div>
              <div className="mt-[20px]">
                <Link
                  to={"/team"}
                  className="rounded-[40px] bg-[#01c300] max-md:p-[15px] p-[10px] font-bold tracking-[2px]"
                >
                  Hype now
                </Link>
              </div>
            </div>
            <img
              src="/bdtc2.jpeg"
              alt=""
              className="md:w-[539px] h-[450px] max-md:h-[300px]"
            />
          </div>
        </div>

        <div className="p-[30px] mt-[9rem] flex text-center items-center justify-center flex-wrap rounded-[50px] bg-[#353535db] max-lg:ml-[0.9rem] ml-[2rem] max-md:gap-[20px] md:gap-[10rem] relative max-w-[1430px] max-h-[884px]		">
          <img
            src="/mode.jpeg"
            alt=""
            className="max-md:left-[12rem] max-sm:left-[2rem] max-lg:left-[2rem] absolute w-[200px] top-[-6rem] left-[19rem]"
          />
          <div className="mt-[5rem] flex flex-col gap-[30px]">
            <span className="text-[#fff] text-[2rem] max-md:text-[1.5rem] font-bold tracking-[9px] w-[250px]">
              Need Pro Shillers ?
            </span>
            <span className="text-[18px] font-medium tracking-[2px] w-[260px]">
              Optimize your project in 3 steps
            </span>
            <div>
              <Link
                to={"/team"}
                className="p-[10px] max-md:p-[15px] rounded-[40px] bg-[#01c300] text-[#fff] text-[1.4rem] tracking-[3px]"
              >
                Book now
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] text-left font-extrabold tracking-[6.6px]">
                Step 1
              </div>
              <span className="text-[1rem]  font-bold text-left tracking-[3.3px]">
                Connect with our specialist for project promotions
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] text-left font-extrabold tracking-[6.6px]">
                Step 2
              </div>
              <span className="text-[1rem] text-left  font-bold tracking-[3.3px]">
                Personalized promotion packages for your product needs
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] text-left font-extrabold tracking-[6.6px]">
                Step 3
              </div>
              <span className="text-[1rem] text-left font-bold tracking-[3.3px]">
                Connect with teams on Telegram
              </span>
            </div>
          </div>
        </div>

        <div className="p-[4rem] flex flex-col text-center items-center justify-center flex-wrap max-md:px-[1rem]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#fff] text-[2rem] max-lg:text-[1.2rem] font-bold leading-8 tracking-[6px]">
              Featured Projects
            </div>
            <div className="text-[#fff] text-[1rem] tracking-[3.3px] font-medium ">
              Discover the trending projects promoted by BDTC
            </div>
          </div>

          <div className="mt-[3rem] flex flex-wrap items-center text-center justify-center gap-[20px]">
            <div className="flex flex-col gap-[2rem] rounded-[50px] max-md:p-[15px] p-[30px] bg-[#353535db]">
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $NINU - $8.9M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $CHINU- $8.3M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $HONK - $44M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $KIZUNA- $58M MC
              </span>
            </div>
            <div className="flex max-md:p-[15px] gap-[2rem] flex-col rounded-[50px] p-[30px] bg-[#353535db]">
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $CRESO - $124M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $DGI - $81M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $TROLL - $128M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $TROLL - $128M MC
              </span>
            </div>
            <div className="flex max-md:p-[15px] flex-col gap-[2rem] rounded-[50px] p-[30px] bg-[#353535db]">
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $PROMTIDE - $4.6M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $BABYSHIB - $14M MC
              </span>

              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $ROCKY - $32.2M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem] opacity-[0]">
                $BABYSHIB - $14M MC
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[3rem] px-[2rem]">
          <div className="text-[#fff] text-[2rem] max-md:text-[1.5rem] font-bold tracking-[8px]">
            FUN FACTS
          </div>

          <div className="mt-[2rem] flex justify-center items-center flex-wrap gap-[40px]">
            <div className="mt-[2rem]">
              <span className="text-[#fff] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                300+ <span>Happy Clients</span>
              </span>
            </div>
            <div className="mt-[2rem]">
              <span className="text-[#01c300] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                300+ <span>Active shillers/ raiders</span>{" "}
              </span>
            </div>
            <div className="mt-[2rem]">
              <span className="text-[#fff] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                16 Hrs Per Day <span>Social Campaign</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[8rem] bg-[#353535db] p-[20px] flex flex-col gap-[20px] text-center justify-center items-center">
          <h1 className="Poppins md:text-[2rem] max-md:text-[1.2rem] font-extrabold tracking-[8px]">
            {" "}
            WHAT DEVS ARE SAYING
          </h1>
          <div className="Poppins text-center text-[1.2rem] max-md:text-[1rem] md:w-[1000px]  font-bold tracking-[2px]">
            Wow, I'm blown away by the incredible work you've done so far! Your
            team's organized outreach strategy has not only increased our social
            media engagement by 300%, but has also attracted the attention of
            key influencers and investors in the crypto space. Your
            professionalism, expertise, and passion for crypto are evident in
            every aspect of your work. Our project's visibility and credibility
            have skyrocketed thanks to your efforts. Keep up the fantastic work
            - I can't wait to see what the future holds for our project with
            your support
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
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
