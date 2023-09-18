import React from "react";
import "./strategy.css";

function Strategies() {
  return (
    <section className="strategies">
      <div className="container strategies-content">
        <div className="d1">
          <p className="p1">Contents Strategies</p>
          <p className="p2">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="strategies-cards">
          <div className="strategies-card">
            <img src="assets/image7.png" alt="" />
            <div className="cr-b">
              <p className="p3">
                By <span className="sp1">Wahid Ari</span> | 03 March 2019
              </p>
              <p className="p4">Increasing Prosperity With Positive Thinking</p>
            </div>
          </div>
          <div className="strategies-card">
            <img src="assets/image8.png" alt="" />
            <div className="cr-b">
              <p className="p3">
                By <span className="sp1">Wahid Ari</span> | 03 March 2019
              </p>
              <p className="p4">Motivation Is The First Step To Success</p>
            </div>
          </div>
          <div className="strategies-card">
            <img src="assets/image10.png" alt="" />
            <div className="cr-b">
              <p className="p3">
                By <span className="sp1">Wahid Ari</span> | 03 March 2019
              </p>
              <p className="p4">Success Steps For Your Personal Or Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategies;
