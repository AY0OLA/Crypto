import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div class="py-[9rem] max-md:px-[2rem] px-[4rem] flex flex-col gap-[2rem]">
        <div class="flex justify-center max-md:flex-wrap gap-[7rem]">
          <img
            src="https://s3-alpha-sig.figma.com/img/9fa5/eed4/c9f663d8ad1803823084536ec1eaf8e9?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIcw~r-zS-yHqZQ5AtQS~OvW9Q3csVqBnvfybgpSWltU8Jp2~qSuOLt9OnR8gsoXQxJc28XxEAaE4E45wZn-DQX6GdHMmtXErD44~joTsiSCU3lUvbazTwIIziNu24b-OdfYyoQSH2SvUbK8X6zbRqA~owbGgdS1M3tg~C4uKAyMZMlH9Y23NSwSlVFQOl8BTk3dTt0tTuGMx2nYfex6ZLTlM5odUt8cc42VZJ~3aZc2RKrpOdYbmZG8KfPDYamJmjWR8TXIXNMCOoTS71d7s9BKkjeAT5ciJHGFEEP15sJiHzcmd4SRGaEmJ-fihGLIdV-TPONF~k4XvcYionKgXw__"
            alt=""
            class="aspect-[10/7] md:w-[615px]"
          />
          <div class="text-[#fff] text-[1rem] font-medium">
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
          <img
            src="https://s3-alpha-sig.figma.com/img/b6cc/88fb/afc437cf8d2845e399d2411d3c1bfa33?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSXi2J~DrEDHS2vRcf-rT-CalQA6tafx3TueadRVGT4GeL1t0Alxt3LeYfcoVN5uCay3yIvb98nbW73T5S3eCt1jvOSwa28~omLnuex531UAs17EnZNNQYKKaiAYiEG1lyjeqFGHYgM-ICQyIUl6ZjJ~47afsDnAv81DuoS9XjedppNss1cXLahJKX0HH1KOx0qV7lLRYUnq9HoKQUwvk4DGuq-8z8aJo3-0uLyDaaEYGkrgOklUN7oF8sveDGCmkGo0UN6gGVmq6KklCn8y3oDmp-UZ5IOeAh-0K3Iyz7gBQbH2Ffp0gFMxCM-unTRgMSyMmOxjJo9SUTrjTc3TDg__"
            alt=""
            class="aspect-[10/7] md:w-[615px]"
          />
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
          <img
            src="https://s3-alpha-sig.figma.com/img/416f/7629/40cc8f5895c2ba8263227deb6cdaeb8e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mbd~3RGd6lTOUgWNkI29E97IGNNJ5ZHpoemRYqWbDd~t4mh8-WEDN9HAG3UMeureRzVCED21-QaMzPzl6pGP8Rgc21l9ptgDINhs-GLbM3cZKI4tYUv4i2h8ZFcVTGEFtUMHkRJeR9Gt~sC8W0i7-H~HKZnyZa~XkQ7pAZhPE33BbVmS5OBbZKo1bscb9FVvai8Iz3DXO~l8bBo8JtKLrsovqTSW7Sprt9yw-ixDRwrxC273krsUhikH2Su2IoB-wjHMqkPdpzdvs442vpXwr5yWtK2HdhwHyN0Q9UP6om~9tEE44KfL6tLAKW5CzAuDjN-B7aIuPsVJ7uJQhOCaLA__"
            alt=""
            class="aspect-[10/7] md:w-[615px]"
          />
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
        <div class="flex justify-center max-md:flex-wrap gap-[7rem] flex-row-reverse	">
          <img
            src="https://s3-alpha-sig.figma.com/img/0a12/7deb/fc2da861a5841961762be04f96ea9f9a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Idiy4R7ebSRzZPG8MgijKEoUl9mrTK~cFNFwWqyidNApI7a~RAsbOeb9sP7SUE7TeJdnIG-C5i6~5jahFx-PoV1HcB-EUQnPdaiXx6o31rV-kD-TlhPlxEibjmx2UEvl~p20pEDWLhn5WTbBSJMGzvHGfSpODzfhF~T9kAvTdsBFrW-OftSw31H6BGA3Ob6kW-TK5BY05cjzcZmVCCOMTDz4AStki~DAlRQmZ2dxUew6I0WYX~iBecqfXUSWSlWpe3TTuG3fRBcW2Ov6zgSpMjQhzZWaxZopa5LVrGo~oL7EmeDF0Dc2uv6c82paT0HkzsLUo5Ln1mb3oMwXrbNwzA__"
            alt=""
            class="aspect-[10/7] md:w-[615px]"
          />
          <div class="text-[#fff] text-[1rem] font-bold flex flex-col gap-[3rem]">
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
          <img
            src="https://s3-alpha-sig.figma.com/img/4217/284f/95b5e54055c82f2a25330a64f2c5284c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFpo9jpAZ76~end1RWsY7JXN84W-mtsxxPQjENwib~A-JstT6WPMTRgBGHNNZJl2LZTpmRWvL79yNEpXvN~XwjCambM9o78HNlF6Hp3a-WKyVdIEPBvfywaYWF-I8QXFKqdAd0VYlsyp3ePpmEfEJ5ZEXHpV1oDzFXA5t7m-weWwYES1ST-DJDXgqJEcRXtMB9j8lFPLetDVUhhW9HXn1WBXUFkbuqb6sQxtTZc2b2jiCeHFw4R0ssjrKQ6GzrzO3eBZBM11t-1pGsImyCiJCmW9QXBcaS3po5~yFVOavVc0g3bpDy0bbygUfapn8kMhMoyIcNDNS1NqAnxThxztCw__"
            alt=""
            class="aspect-[10/7] md:w-[615px]"
          />
          <div class="text-[#fff] text-[1rem] font-medium flex flex-col gap-[3rem] md:w-[615px]">
            <div class="text-[3rem] font-extrabold max-md:text-[1.4rem]">
              MODs, Hype team & Graphics Designers
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
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
