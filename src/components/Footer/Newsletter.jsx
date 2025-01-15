import React from "react";

import { SubHeading } from "../../components";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to out newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>

    <div className="app__newsletter-input">
      <input type="email" placeholder="Enter your e-mail Adress" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
