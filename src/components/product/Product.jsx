import React from "react";
import "./product.css";

function Product() {
  return (
    <section className="product">
      <div className="container product-content">
        <div className="d1">
          <p className="p1">Product was Built Specifically for You</p>
          <div className="product-cards">
            <div className="product-card">
              <img src="assets/image3.svg" alt="" />
              <p className="p2">First click tests</p>
              <p className="p3">While most people enjoy casino gambling,</p>
            </div>
            <div className="product-card">
              <img src="assets/image4.svg" alt="" />
              <p className="p2">Design surveys</p>
              <p className="p3">
                Sports betting, lottery and bingo playing for the fun
              </p>
            </div>
            <div className="product-card">
              <img src="assets/image5.svg" alt="" />
              <p className="p2">Preference tests</p>
              <p className="p3">The Myspace page defines the individual.</p>
            </div>
            <div className="product-card">
              <img src="assets/image6.svg" alt="" />
              <p className="p2">First click tests</p>
              <p className="p3">
                Personal choices and the overall personality of the person.{" "}
              </p>
            </div>
          </div>
          <div className="product-btn">
            <a href="#">
              <button className="btn4">SIGN UP NOW</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
