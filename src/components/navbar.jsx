import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

const LinksGroup = () => {
  const activeLink = "mx-6 text-3xl text-red-500";
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
    <div className="flex items-center w-full sticky bg-blue-500 z-10 top-0">
      <div className="flex w-full h-[60px] justify-between items-center mx-8 max-sm:w-full">
        <Link className="text-3xl text-white hover:text-red-400" to="/">
          Shop
        </Link>
        <div className="text text-[25px] text-white cursor-pointer hidden max-sm:block">
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
          <Tooltip title="Order" arrow>
            <NavLink to="/orderList" className="text-2xl text-white ">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </Tooltip>
          <Badge badgeContent={cartItemInfo.length} color="secondary">
            <Tooltip title="Cart" arrow>
              <NavLink to="/cart" className="text-2xl text-white">
                <FontAwesomeIcon icon={faCartPlus} />
              </NavLink>
            </Tooltip>
          </Badge>
        </div>
      </div>
    </div>
  );
};
