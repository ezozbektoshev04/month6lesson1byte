import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="container about-content">
        <div className="d1">
          <p className="p1">What Clients Say</p>
          <p className="p2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <img src="assets/image11.svg" alt="" />
            <p className="p3">
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="d2">
              <img src="assets/image12.svg" alt="" />
              <div className="d3">
                <p className="p4">Wahid Ari</p>
                <p className="p5">Designer</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <img src="assets/image11.svg" alt="" />
            <p className="p3">
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="d2">
              <img src="assets/image13.svg" alt="" />
              <div className="d3">
                <p className="p4">Wahid Ari</p>
                <p className="p5">Designer</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <img src="assets/image11.svg" alt="" />
            <p className="p3">
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="d2">
              <img src="assets/image14.svg" alt="" />
              <div className="d3">
                <p className="p4">Wahid Ari</p>
                <p className="p5">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
