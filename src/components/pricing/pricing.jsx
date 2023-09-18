import React from "react";
import "./pricing.css";

function Pricing() {
  return (
    <section className="pricing">
      <div className="container pricing-content">
        <div className="d1">
          <p className="p1">Price Table</p>
          <p className="p2">We offer competitive price</p>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <p className="p3">Free</p>
            <p className="p4">Brief price description</p>
            <div className="d2">
              <p className="p5">0</p>
              <div className="d3">
                <p className="p6">$</p>
                <p className="p7">Per / month</p>
              </div>
            </div>
            <p className="p8">Only 2 Operators</p>
            <p className="p8">Notifications</p>
            <p className="p8">Landing Pages</p>
            <a href="#">
              <button className="btn5">Order Now</button>
            </a>
          </div>
          <div className="pricing-card">
            <p className="p3">Standard</p>
            <p className="p4">Brief price description</p>
            <div className="d2">
              <p className="p5">5</p>
              <div className="d3">
                <p className="p6">$</p>
                <p className="p7">Per / month</p>
              </div>
            </div>
            <p className="p8">5+ Operators</p>
            <p className="p8">Notifications</p>
            <p className="p8">Landing Pages</p>
            <a href="#">
              <button className="btn5">Order Now</button>
            </a>
          </div>
          <div className="pricing-card">
            <p className="p3">Premium</p>
            <p className="p4">Brief price description</p>
            <div className="d2">
              <p className="p5">10</p>
              <div className="d3">
                <p className="p6">$</p>
                <p className="p7">Per / month</p>
              </div>
            </div>
            <p className="p8">10+ Operators</p>
            <p className="p8">Notifications</p>
            <p className="p8">Landing Pages</p>
            <a href="#">
              <button className="btn5">Order Now</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
