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
            <div className="contect phone">
              <i class="fa-solid fa-phone-flip"></i>
              <span>+91 86 86 86 2475</span>
            </div>
            <div className="contect email">
              <i className="fa-solid fa-envelope"></i>
              <span>info@awcindia.com</span>
            </div>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              {" "}
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PRODUCTS</a>
            </li>
            <li>
              {" "}
              <a href="#">GALLARY</a>
            </li>
            <li>
              <a href="#">CAREER</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">TESTIMONIAL</a>
            </li>
          </ul>
          <button>
            <a href="#">CONTACT</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
