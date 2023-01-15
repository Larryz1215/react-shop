import React, {useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";
export const Cart = () => {
  const { getTotalCartAmount,cartItemInfo} = useContext(ShopContext);  
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>你的購物車</h1>
      </div>
      <div className="cartItems">
        {cartItemInfo.map((product) => {
            console.log("data",product)
            return <CartItem data={product} key={product.id}/>;
          }
        )}
      </div>   
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>總金額:${totalAmount}</p>
          <button onClick={() => navigate("/")}>繼續購物</button>
          <button onClick={() => navigate("/checkout")}>結帳</button>
        </div>
      ) : (
        <h1>購物車是空的</h1>
      )}
    </div>
  );
};
