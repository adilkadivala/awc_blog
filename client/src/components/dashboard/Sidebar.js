import React, { useState } from "react";
import "../../assets/css/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const sidebarItems = [
    { label: "Users", iconClass: "fa-solid fa-users", path: "/dashboard" },
    { label: "My Postes", iconClass: "fa-solid fa-paperclip", path: "/posts" },
    {
      label: "Analytics",
      iconClass: "fa-solid fa-chart-simple",
      path: "/analitics",
    },
  ];
  return (
    <>
      <section id="sidebar" className={isOpen ? "" : "hide"}>
        <Link to="/dashboard" className="brand">
          <span className="text">AdminHub</span>
        </Link>
        <ul className="side-menu top">
          {sidebarItems.map((item, index) => (
            <li key={index} className={index === activeItem ? "active" : ""}>
              <Link to={item.path} onClick={() => handleItemClick(index)}>
                <i className={`bx ${item.iconClass}`}></i>
                <span className="text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
