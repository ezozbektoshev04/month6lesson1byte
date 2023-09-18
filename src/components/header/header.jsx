import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#" className="logo-img">
              <img src="assets/logo1.svg" alt="" />
              Product
            </a>
          </div>
          <div className="nav-items">
            <div className="nav-links">
              <a href="#" className="nav-link">
                Product
              </a>
              <a href="#" className="nav-link">
                Customers
              </a>
              <a href="#" className="nav-link">
                Pricing
              </a>
              <a href="#" className="nav-link">
                Resources
              </a>
            </div>
            <div className="nav-btns">
              <a href="#">
                <button className="btn1">Sign In</button>
              </a>
              <a href="#">
                <button className="btn1">Sign Up</button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
