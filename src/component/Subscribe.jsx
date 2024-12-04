import React from "react";
import subscribeImage from "../assets/images/mobile_hand.png"; 

function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>Subscribe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="subscribe-input"
          />
          <button className="subscribe-button">
            Subscribe Now <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="subscribe-image">
        <img src={subscribeImage} alt="Subscribe" />
      </div>
    </div>
  );
}

export default Subscribe;
