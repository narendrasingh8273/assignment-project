import React from "react";
import heroimg from "../assets/images/hero_image.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua smod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="know-more-btn">
          Know More <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>

      <div className="hero-image">
        <img src={heroimg} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
