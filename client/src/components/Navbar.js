import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

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
              <i className="fa-solid fa-phone-flip"></i>
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
              <Link to="">HOME</Link>
            </li>
            <li>
              <Link to="">ABOUT</Link>
            </li>
            <li>
              <Link to="">PRODUCTS</Link>
            </li>
            <li>
              <Link to="">GALLARY</Link>
            </li>
            <li>
              <Link to="">CAREER</Link>
            </li>
            <li>
              <Link to="">BLOG</Link>
            </li>
            <li>
              <Link to="">TESTIMONIAL</Link>
            </li>
          </ul>
          <button>
            <Link to="">CONTACT</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;