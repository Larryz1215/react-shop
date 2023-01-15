import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./shop.css";

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
    <>
      <div
        className={showGoTop ? "" : "goTopHidden"}
        onClick={handleSrollUp}
      >
        <button className={"goTop"}>
          <FontAwesomeIcon icon={faCaretUp} />
          <span>Top</span>
        </button>
      </div>
    </>
  );
};

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Larry shop</h2>
      </div>

      
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      <GoTop />
    </div>
  );
};
