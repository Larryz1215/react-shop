import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { getTotalCartAmount, cartItemInfo } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center mt-12 animate-fadeIn">
      <div className="mt-5 text-4xl dark:text-white">你的購物車</div>
      <div>
        {cartItemInfo.map((product) => {
          console.log("data", product);
          return <CartItem data={product} key={product.id} />;
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
          <p className="text text-2xl dark:text-white">總金額:${totalAmount}</p>
          <button
            className="w-40 h-12 m-3 bg-green-600 text-white rounded-2xl"
            onClick={() => navigate("/")}
          >
            繼續購物
          </button>
          <button
            className="w-40 h-12 m-3 bg-red-400 text-white rounded-2xl"
            onClick={() => navigate("/checkout")}
          >
            結帳
          </button>
        </div>
      ) : (
        <h1 className="text text-2xl mt-5 dark:text-white">購物車是空的</h1>
      )}
    </div>
  );
};
