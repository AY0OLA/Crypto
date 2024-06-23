import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div class="py-[9rem] max-md:px-[2rem] px-[4rem] flex flex-col gap-[2rem]">
        <div class="flex justify-center max-md:flex-wrap md:gap-[2rem] max-md:gap-[7rem]">
          <img src="/1.jpeg" alt="" class="aspect-[10/7] md:w-[615px]" />
          <div class="text-[#fff] text-[1rem] font-bold">
            <div class="text-[3rem] max-md:text-[1.6rem] font-extrabold mb-[2rem] text-center uppercase">
              our work
            </div>
            Our crypto marketing agency is dedicated to creating visibility and
            awareness for your project. We accomplish this through a variety of
            services, such as ensuring a convincing environment for incoming
            investors and managing your project’s socials and ensure regular
            engagement and an appealing appearance. Our team’s skills also
            include raiding and shilling to help your project shine in the
            spotlight. Let us help you take your project to the next level.
          </div>
        </div>
        <div class="flex justify-center max-md:flex-wrap gap-[7rem] flex-row-reverse	">
          <img src="/3h.jpeg" alt="" class="aspect-[10/7] md:w-[615px]" />
          <div class="text-[#fff] text-[1rem] font-bold flex flex-col gap-[3rem]">
            <div class="text-[3rem] font-extrabold  max-md:text-[1.4rem]">
              Proffessional AI raiding
            </div>
            We offer expert raiding services for crypto projects, leveraging our
            team's intellectual prowess and organic marketing expertise to
            execute a carefully crafted strategy that drives targeted engagement
            and growth for your project. By harnessing our skills, we create a
            thriving community that encourages active participation and fosters
            a positive atmosphere, attracting incoming investors and promoting
            healthy, confident discussions. Our goal is to establish a
            supportive ecosystem that propels your project forward.
            <Link
              to={"/team"}
              class="bg-[#01c300] text-center w-[140px] max-md:p-[15px] p-[10px] rounded-[30px] text-[1rem] text-[#fff]"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div class="flex justify-center max-md:flex-wrap gap-[7rem]">
          <img src="/3.jpeg" alt="" class="aspect-[10/7] md:w-[615px]" />
          <div class="text-[#fff] text-[1rem] font-bold flex flex-col gap-[3rem]">
            <div class="text-[2rem] font-extrabold max-md:text-[1.4rem]">
              REDDIT & DEXSCREENER UPVOTES
            </div>
            We offer expert raiding services for crypto projects, leveraging our
            team's intellectual prowess and organic marketing expertise to
            execute a carefully crafted strategy that drives targeted engagement
            and growth for your project. By harnessing our skills, we create a
            thriving community that encourages active participation and fosters
            a positive atmosphere, attracting incoming investors and promoting
            healthy, confident discussions. Our goal is to establish a
            supportive ecosystem that propels your project forward.
            <Link
              to={"/team"}
              class="bg-[#01c300] text-center w-[140px] max-md:p-[15px] p-[10px] rounded-[30px] text-[1rem] text-[#fff]"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div class="flex  max-md:flex-wrap gap-[7rem] 	text-left">
          <div class="aspect-[10/7] w-[100px] hidden md:w-[615px]"></div>
          <div class="text-[#fff] text-[1rem] font-bold flex md:w-[615px] flex-col gap-[3rem]">
            <div class="text-[3rem] font-extrabold  max-md:text-[1.4rem]">
              Public Awareness
            </div>
            Our services are designed to elevate your project's visibility and
            credibility, cutting through the noise in the crowded crypto market
            and positioning it among the top projects in the spotlight. Through
            strategic public awareness campaigns, we effectively increase
            recognition, drive engagement,setting it up for success and
            long-term growth in a competitive landscape.
            <Link
              to={"/team"}
              class="bg-[#01c300] text-center w-[140px] max-md:p-[15px] p-[10px] rounded-[30px] text-[1rem] text-[#fff]"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div class="flex justify-center max-md:flex-wrap gap-[7rem]">
          <img src="/5.jpeg" alt="" class="aspect-[10/7] md:w-[615px]" />
          <div class="text-[#fff] text-[1rem] font-bold flex flex-col gap-[3rem] md:w-[615px]">
            <div class="text-[3rem] font-extrabold max-md:text-[1.4rem]">
              MODs, Hype team & Graphics Designers
            </div>
            Experienced community managers who ensure a positive and engaging
            environment for your project's online presence. A group of
            enthusiastic and influential crypto advocates who generate buzz and
            excitement around your project. Creative professionals who craft
            visually stunning graphics, logos, and branding materials to help
            your project stand out in a crowded market.
            <Link
              to={"/team"}
              class="bg-[#01c300] text-center w-[140px] max-md:p-[15px] p-[10px] rounded-[30px] text-[1rem] text-[#fff]"
            >
              Book Now
            </Link>
          </div>
          <div class="text-[#fff] text-[1rem] font-medium flex flex-col gap-[3rem]">
            {/* <div class="text-[3rem] font-extrabold max-md:text-[1.4rem]">
              Technical Analysis Class
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a
              href="#"
              class="bg-[#01c300] text-center w-[140px] p-[10px] rounded-[30px] text-[1rem] text-[#fff]"
            >
              Apply Now
            </a> */}
          </div>
        </div>
        <div class="flex">
          <div className="img"></div>

          {/* <div class="text-[#fff] text-[1rem] font-medium flex flex-col gap-[3rem] md:w-[615px]">
            <div class="text-[3rem] font-extrabold max-md:text-[1.4rem]">
              MODs, Hype team & Graphics Designers
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a
              href="#"
              class="bg-[#01c300] text-center w-[140px] p-[10px] rounded-[30px] text-[1rem] text-[#fff]"
            >
              Book Now
            </a>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
