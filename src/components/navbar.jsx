import React from "react";
import { NavLink,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <div className="linksGroups">
          <NavLink to="/3c" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>3C</NavLink>
          <NavLink to="/clothing" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Clothing</NavLink>
          <NavLink to="/food" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Food</NavLink>
          <NavLink to="/daily" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Daily</NavLink>
        </div>
        <Link to="/orderList">
        <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartPlus} />
        </Link>
      </div>
    </div>
  );
};
