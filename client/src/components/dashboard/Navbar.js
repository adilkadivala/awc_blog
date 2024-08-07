import React, { useState, useEffect } from "react";
import "../../assets/css/nav_deshboard.css";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, toggleDarkMode }) => {
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSearchForm = (e) => {
    e.preventDefault();
    setSearchFormVisible(!isSearchFormVisible);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <>
      <section id="content">
        <nav>
          <i
            className="fa-solid fa-bars"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          ></i>
          <Link to="/" className="nav-link">
            Categories
          </Link>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button
                type="submit"
                className="search-btn"
                onClick={toggleSearchForm}
              >
                <i
                  className={`fa-solid ${
                    isSearchFormVisible ? "fa-xmark" : "fa-magnifying-glass"
                  } `}
                ></i>
              </button>
            </div>
          </form>
          <input
            type="checkbox"
            id="switch-mode"
            hidden
            onChange={toggleDarkMode}
          />
          <label htmlFor="switch-mode" className="switch-mode"></label>

          <Link to="/" className="profile">
            <img src={require("../../assets/images/people.png")} alt="user" />
          </Link>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
