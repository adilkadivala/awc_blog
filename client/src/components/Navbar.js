import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="brand">
        <img
          src={require("../assets/images/logo.png")}
          alt="brand"
          width={160}
          height={90}
        />
      </div>
      <div className="nav_items">
        <div className="social_info">
          <div className="social">
            <i className="fa-brands fa-facebook-f social_icon"></i>
            <i className="fa-brands fa-x-twitter social_icon"></i>
            <i className="fa-brands fa-youtube social_icon"></i>
            <i className="fa-brands fa-linkedin-in social_icon"></i>
          </div>
          <div className="contect_info">
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <span>+91 86 86 86 2475</span>
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <span>info@awcindia.com</span>
            </div>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
            <li>GALLARY</li>
            <li>CAREER</li>
            <li>BLOG</li>
            <li>TESTIMONIAL</li>
          </ul>
          <button>COTACT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
