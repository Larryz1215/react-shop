import React, { useState,useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";

export const Navbar = () => {
  const {cartItemInfo} = useContext(ShopContext);  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const listItem = [
    {
      text: "3c",
      onclick: () => {
        navigate("/3c"), setAnchorEl(null);
      },
    },
    {
      text: "Clothing",
      onclick: () => {
        navigate("/clothing"), setAnchorEl(null);
      },
    },
    {
      text: "food",
      onclick: () => {
        navigate("/food"), setAnchorEl(null);
      },
    },
    {
      text: "Daily",
      onclick: () => {
        navigate("/daily"), setAnchorEl(null);
      },
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <div className="bar">
          <FontAwesomeIcon
            icon={faBars}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {listItem.map((item) => {
              const { text, onclick } = item;
              return (
                <MenuItem key={text} onClick={onclick}>
                  {text}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
        <div className="linksGroups">
          <NavLink
            to="/3c"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            3C
          </NavLink>
          <NavLink
            to="/clothing"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Clothing
          </NavLink>
          <NavLink
            to="/food"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Food
          </NavLink>
          <NavLink
            to="/daily"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Daily
          </NavLink>
        </div>
        <Link to="/orderList">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Badge badgeContent={cartItemInfo.length} color="error">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </Link>
        </Badge>
      </div>
    </div>
  );
};
