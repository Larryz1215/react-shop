import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import LogoutIcon from "@mui/icons-material/Logout";
export const Logout = () => {
  const { setIsLogin } = useContext(ShopContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
  };
  return (
    <NavLink
      onClick={handleLogout}
      to="/"
      className="flex felx-row text-xl text-black space-x-2  dark:text-white "
    >
      <p>Logout</p>
      <LogoutIcon />
    </NavLink>
  );
};

export default Logout;
