import React from "react";
import "./Service.css";
import Footer from "../Footer/Footer";

const Service = () => {
  return (
    <div className="serv">
      <div className="service">
        <div className="serviceItem">
          <div className="projectmc">
            <span className="head">PROJECT MC</span>

            <div className="box">
              <div className="contest">$CRESO - $124M MC</div>
              <div className="contest">$TROLL - $128M MC</div>
              <div className="contest">$DGI - $81M MC</div>
              <div className="contest">$KIZUNA- $58M MC</div>
            </div>
          </div>
          <div className="testimo">
            <div className="head">TESTIMONIES</div>
            <div className="boxs">
              <div className="img"></div>
              <div className="img"></div>
              <div className="img"></div>
              <div className="img"></div>
            </div>
            <button className="view">View More</button>
          </div>
        </div>
        <div className="recentWork">
          <h1>RECENT WORKS</h1>

          <div className="workCont">
            <span className="say">
              Better Days Through Crypto has been at the forefront of the crypto
              industry, bringing innovative solutions to help our clients
              succeed. our projects have been instrumental in driving success
              for many businesses, and we are proud of the result we deliver.
              Explore our recnt projects below and see for yourself how we are
              changing the game throught crypto marketing{" "}
            </span>
            <div className="proWork">
              <img src="./src/image/kizu.jpeg" alt="" />
              <img src="./src/image/proj.jpeg" alt="" />
              <img src="./src/image/Troll.jpeg" alt="" />
              <img src="./src/image/Creso.jpeg" alt="" />
              <img src="./src/image/bi.jpeg" alt="" />
              <img src="./src/image/chinu.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="dev">
        <h1> WHAT DEVELOPERS’ ARE SAYING</h1>
        <div className="divSay">
          Lorem ipsum dolor sit amet consectetur. Sed amet sed neque sit ut leo
          at habitasse mi. Ut condimentum lorem eget id dictum. Eros et dictum
          venenatis feugiat condimentum et pellentesque elementum
          vulputate.Lorem ipsum dolor sit amet consectetur. Sed amet sed neque
          sit ut leo at habitasse mi. Ut condimentum lorem .Lorem ipsum dolor
          sit amet consectetur. Sed amet sed neque sit ut leo at habitasse mi.
          Ut condimentum lorem{" "}
        </div>
      </div>
      <div className="video">
        <video
          src="./src/image/Video.mp4"
          muted
          autoPlay
          className="play"
        ></video>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
