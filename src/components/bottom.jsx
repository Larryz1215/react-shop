import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export const Bottom = () => {
  return (
    <footer className="flex flex-row w-full justify-center items-center py-4 space-x-10  bg-blue-500 dark:bg-slate-900 dark:text-white">
      <p className="text text-xl ">Larry ©2023 </p>
      <div className="flex space-x-5 ">
        <FacebookIcon
          fontSize="large"
          className="text cursor-pointer hover:text-white"
        />
        <LinkedInIcon
          fontSize="large"
          className="text cursor-pointer hover:text-white"
        />
        <EmailIcon
          fontSize="large"
          className="text cursor-pointer hover:text-white"
        />
      </div>
    </footer>
  );
};

export default Bottom;
