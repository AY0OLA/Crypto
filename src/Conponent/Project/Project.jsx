import React from "react";
import "./Project.css";
import Footer from "../Footer/Footer";

const Project = () => {
  return (
    <>
      <div class="Ourwork">
        <div class="work">
          <img src="./src/image/1.jpeg" alt="" class="img" />
          <div class="workContent">
            <div class="workHeader">our work</div>
            Our crypto marketing agency is dedicated to creating visibility and
            awareness for your project. We accomplish this through a variety of
            services, such as ensuring a convincing environment for incoming
            investors and managing your project’s socials and ensure regular
            engagement and an appealing appearance. Our team’s skills also
            include raiding and shilling to help your project shine in the
            spotlight. Let us help you take your project to the next level.
          </div>
        </div>
        <div class="work invert">
          <img src="./src/image/2.jpeg" alt="" class="img" />
          <div class="Contect">
            <div class="workHeader">Proffessional AI raiding</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a href="#" class="book">
              Book Now
            </a>
          </div>
        </div>
        <div class="work">
          <img src="./src/image/3.jpeg" alt="" class="img" />
          <div class="Contect">
            <div class="workHeader">FX Signal Room</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a href="#" class="book">
              Apply Now
            </a>
          </div>
        </div>
        <div class="work invert">
          <img src="./src/image/4.jpeg" alt="" class="img" />
          <div class="Contect">
            <div class="workHeader">Public Awareness</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a href="#" class="book">
              Book Now
            </a>
          </div>
        </div>
        <div class="work">
          <img src="./src/image/5.jpeg" alt="" class="img" />
          <div class="Contect">
            <div class="workHeader">Technical Analysis Class</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a href="#" class="book">
              Apply Now
            </a>
          </div>
        </div>
        <div class="work invert">
          <div className="img"></div>

          <div class="Contect">
            <div class="workHeader">MODs, Hype team & Graphics Designers</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
            architecto eius doloribus. Autem quia, quo dolore ipsum numquam hic
            ab facilis laborum magnam iste aliquam rerum, neque aliquid
            blanditiis!
            <a href="#" class="book">
              Book Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
