import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
export const Member = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const { setIsLogin } = useContext(ShopContext);

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Member">
        <AccountCircleIcon
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-2xl text-white dark:text-white "
        />
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{ sx: { mt: 2.5 } }}
      >
        <MenuItem className="min-w-[120px]">
          <Tooltip title="Order" arrow>
            <NavLink
              to="/profile"
              className="flex felx-row text-xl text-black space-x-2  dark:text-white "
            >
              <p>Profile</p>
            </NavLink>
          </Tooltip>
        </MenuItem>
        <MenuItem className="min-w-[120px]">
          <Tooltip title="Order" arrow>
            <NavLink
              to="/orderList"
              className="flex felx-row text-xl text-black space-x-2  dark:text-white "
            >
              <p>Order</p>
            </NavLink>
          </Tooltip>
        </MenuItem>
        <Divider />
        <MenuItem className="min-w-[120px]">
          <Tooltip title="Order" arrow>
            <NavLink
              onClick={handleLogout}
              to="/"
              className="flex felx-row text-xl text-black space-x-2  dark:text-white "
            >
              <p>Logout</p>
              <LogoutIcon />
            </NavLink>
          </Tooltip>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Member;
