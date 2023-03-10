import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export const GoTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);
  
  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 80);
  };
  const handleSrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? "" : "hidden"} onClick={handleSrollUp}>
      <button className="flex flex-col justify-center items-center text-xl w-14 h-14 right-5 bottom-24 fixed border-2 border-slate-800 rounded-full  hover:text-blue-500 dark:bg-white">
        <FontAwesomeIcon icon={faCaretUp} />
        <span>Top</span>
      </button>
    </div>
  );
};
