import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            <span>Crafting Digital</span>{" "}
            <span className="highlight">Experiences</span>
          </h1>
          <p>
            I'm <strong>Daudi Mwanzia</strong>, a web developer passionate about
            turning ideas into <span className="highlight">reality</span>.
          </p>
          <button className="hero-button">
            <a href="#projects">Explore My Work</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
