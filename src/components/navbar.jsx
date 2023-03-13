import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const LinksGroup = () => {
  const activeLink = "mx-6 text-3xl text-red-600";
  const inactiveLink = "mx-6 text-3xl text-white max-md:text-2xl";

  return (
    <div className="flex justify-center w-full max-sm:hidden">
      <NavLink
        to="/3c"
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        3C
      </NavLink>
      <NavLink
        to="/clothing"
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        Clothing
      </NavLink>
      <NavLink
        to="/food"
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        Food
      </NavLink>
      <NavLink
        to="/daily"
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        Daily
      </NavLink>
    </div>
  );
};

export const Navbar = () => {
  const { cartItemInfo } = useContext(ShopContext);
  const [darkMode, setDarkMode] = useState(false);
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
  const handleThemeSwitch = () => {
    const html = document.querySelector("html");
    if (darkMode === false) {
      setDarkMode(true);
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setDarkMode(false);
    }
  };

  return (
    <div className="flex items-center w-full sticky bg-blue-500 z-10 top-0 dark:bg-slate-900">
      <div className="flex w-full h-[60px] justify-between items-center mx-8 max-sm:w-full">
        <Link
          className="text-3xl text-white hover:text-white dark:text-white"
          to="/"
        >
          Shop
        </Link>
        <div className="text text-[25px] text-white cursor-pointer hidden max-sm:block dark:text-white">
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
        <LinksGroup />
        <div className="flex space-x-5">
          {darkMode ? (
            <DarkModeIcon
              sx={{ fontSize: 30 }}
              className="text text-white text-2xl"
              onClick={handleThemeSwitch}
            />
          ) : (
            <LightModeIcon
              className="text-white"
              sx={{ fontSize: 30 }}
              onClick={handleThemeSwitch}
            />
          )}

          <Tooltip title="Order" arrow>
            <NavLink
              to="/orderList"
              className="text-2xl text-white dark:text-white "
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </Tooltip>
          <Badge badgeContent={cartItemInfo.length} color="secondary">
            <Tooltip title="Cart" arrow>
              <NavLink
                to="/cart"
                className="text-2xl text-white dark:text-white"
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </NavLink>
            </Tooltip>
          </Badge>
        </div>
      </div>
    </div>
  );
};
