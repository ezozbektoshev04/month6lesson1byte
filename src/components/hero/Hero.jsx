import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="d1">
          <p className="p1">Work at the speed of thought</p>
          <p className="p2">
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="hero-btns">
            <div className="btn2">Get started</div>
            <div className="btn3">
              <img src="assets/image2.svg" alt="" />
              Watch the Video
            </div>
          </div>
        </div>
        <div className="d2">
          <img src="assets/image1.png" alt="" className="img1" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
