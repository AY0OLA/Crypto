import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <>
      <div class="Team">
        <img src="./src/image/1a.png" alt="" class="img" />

        <div class="connet">
          <img src="./src/image/1b.jpeg" alt="" class="image" />
          <Link to={"/contact"} class="book">
            Connect
          </Link>
        </div>
        <div class="teamMember">
          <div class="member">
            <img src="./src/image/2b.jpeg" alt="" class="img" />
            <div class="text">
              <div class="pos">CEO</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel quis fuga modi temporibus qui illo eveniet dolorum.
            </div>
          </div>
          <div class="member">
            <img src="./src/image/2a.jpeg" alt="" class="img" />
            <div class="text">
              <div class="pos">CFO</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel quis fuga modi temporibus qui illo eveniet dolorum.
            </div>
          </div>
          <div class="member">
            <img src="./src/image/2d.jpeg" alt="" class="img" />
            <div class="text">
              <div class="pos">ED</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel quis fuga modi temporibus qui illo eveniet dolorum.
            </div>
          </div>
          <div class="member">
            <img src="./src/image/2c.jpeg" alt="" class="img" />
            <div class="text">
              <div class="pos">MD</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel quis fuga modi temporibus qui illo eveniet dolorum.
            </div>
          </div>
          <div class="member">
            <img src="./src/image/2f.jpeg" alt="" class="img" />
            <div class="text">
              <div class="pos">SPM</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel quis fuga modi temporibus qui illo eveniet dolorum.
            </div>
          </div>
          <div class="member">
            <img src="./src/image/2e.jpeg" alt="" class="img" />
            <div class="text">
              <div class="pos">SPM</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestiae vel quis fuga modi temporibus qui illo eveniet dolorum.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
