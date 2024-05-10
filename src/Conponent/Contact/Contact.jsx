import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div class="contact">
        <h1>contact</h1>
        <span>
          Get in touch with us. We are here to boost your project for devs/
          influencers attention.
        </span>
      </div>
      <form action="">
        <div>
          <span>Our Name</span>
          <input type="text" />
        </div>
        <div>
          <span>Our Email</span>
          <input type="email" />
        </div>
        <div>
          <span>Subject</span>
          <input type="text" />
        </div>

        <button type="submit">Send Message</button>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
