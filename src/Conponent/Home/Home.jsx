import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <span className="welcome">Welcome to BDTC </span>
        <div className="image">
          <span className="bold">
            ATTRACTING DESIRED AUDIENCE AND DELIVERING ON OBJECTIVES
          </span>
          <span className="light">
            CREATING THE OPTIMAL BUZZ AND VIBE FOR YOUR BRAND AND PROJECTS
            WITHIN THE CRYPTO COMMUNITY
          </span>
        </div>

        <div className="whoWeAre">
          <span>WHO WE ARE</span>
          Better Days Through Crypto is not just a marketing agency, but also
          community of crypto enthusiasts and professionals who are dedicated to
          supporting and overseeing the growth and productivity of your crypto
          project. Our team includes raiders, shillers, MODs, and graphic
          designers who all bring their unique talents and expertise to the
          table. We believe that through collaboration and hard work we can help
          bring your project to its full potential.
        </div>

        <div className="customer">
          <span className="promote">Promoted by BDTC</span>
          <div className="projec">
            <img src="./src/image/kizu.jpeg" alt="" />
            <img src="./src/image/chinu.jpeg" alt="" />
            <img src="./src/image/Troll.jpeg" alt="" />
            <img src="./src/image/Creso.jpeg" alt="" />
            <img src="./src/image/proj.jpeg" alt="" />
          </div>
        </div>

        <div className="squad">
          <div className="product">
            <div className="text">
              <h1>Discover the power of Shilling</h1>
              <span>Get upto 250+ pro shillers for your project.</span>

              <div className="flex">
                <button>Book Online</button>
                <button>Book On Telegram</button>
              </div>
            </div>
            <img src="./src/image/raid.jpeg" alt="" />
          </div>
          <div className="product invert">
            <div className="text">
              <h2>
                Secure Twitter, Telegram and Discord Promotions and Listing
              </h2>
              <span className="w">
                We ensure your project gets the attention it deserves on
                twitter, telegram and others, our team uses strategic promotion
                techniques to attract developers and make your project trending.
              </span>
            </div>
            <img src="./src/image/bdtc.jpeg" alt="" />
          </div>
          <div className="product">
            <div className="text">
              <h1>Boost your project visibility with BDTC hype</h1>
              <div className="radio">
                <div>
                  <input type="radio" />
                  Provision for upto 250 Raiders/Shillers
                </div>
                <div>
                  <input type="radio" />
                  Provision for Hype men for projects
                </div>
                <div>
                  <input type="radio" />
                  Project call on all socials including telegram channel 1.6k
                  subscribers and official X account.
                </div>
              </div>
              <div className="flex">
                <button>Hype now</button>
              </div>
            </div>
            <img src="./src/image/bdtc2.jpeg" alt="" />
          </div>
        </div>

        <div className="shill">
          <img src="./src/image/mode.jpeg" alt="" />
          <div className="words">
            <span className="needs">Need Pro Shillers ?</span>
            <span className="step">Optimize your project in 3 steps</span>
            <button>Book now</button>
          </div>
          <div className="stage">
            <div className="group">
              <div className="sep">Step 1</div>
              <span className="connet">
                Connect with our specialist for project promotions
              </span>
            </div>
            <div className="group">
              <div className="sep">Step 2</div>
              <span className="connet">
                Personalized promotion packages for your product needs
              </span>
            </div>
            <div className="group">
              <div className="sep">Step 2</div>
              <span className="connet"></span>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="flex">
            <div className="feat">Featured Projects</div>
            <div className="sp">
              Discover the trending projects promoted by BDTC
            </div>
          </div>

          <div className="fles">
            <div className="pro">
              <span>$NINU - $8.9M MC</span>
              <span>$CHINU- $8.3M MC</span>
              <span>$HONK - $44M MC</span>
              <span>$KIZUNA- $58M MC</span>
            </div>
            <div className="pro">
              <span>$CRESO - $124M MC</span>
              <span>$DGI - $81M MC</span>
              <span>$TROLL - $128M MC</span>
              <span>$TROLL - $128M MC</span>
            </div>
            <div className="pro">
              <span>$PROMTIDE - $4.6M MC</span>
              <span>$BABYSHIB - $14M MC</span>

              <span>$ROCKY - $32.2M MC</span>
            </div>
          </div>
        </div>

        <div className="fact">
          <div className="funny">FUN FACTS</div>

          <div className="fle">
            <div className="gro">
              <span>
                50+ <span>Happy Clients</span>
              </span>
            </div>
            <div className="colo">
              <span>
                300+ <span>Active shillers/ raiders</span>{" "}
              </span>
            </div>
            <div className="gro">
              <span>
                14 Hrs Per Day <span>Social Campaign</span>
              </span>
            </div>
          </div>
        </div>

        <div className="devs">
          <h1> WHAT DEVELOPERS’ ARE SAYING</h1>
          <div className="divSay">
            Lorem ipsum dolor sit amet consectetur. Sed amet sed neque sit ut
            leo at habitasse mi. Ut condimentum lorem eget id dictum. Eros et
            dictum venenatis feugiat condimentum et pellentesque elementum
            vulputate.Lorem ipsum dolor sit amet consectetur. Sed amet sed neque
            sit ut leo at habitasse mi. Ut condimentum lorem .Lorem ipsum dolor
            sit amet consectetur. Sed amet sed neque sit ut leo at habitasse mi.
            Ut condimentum lorem{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
