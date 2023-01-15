import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const CartItem = (props) => {
  const { id, productName, price, productImage,quantity } = props.data;
  const {addToCart, removeFromCart, updateCartItemCount,deleteFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
      <div className="deleteItem" >
      <FontAwesomeIcon icon={faXmark} onClick={() => deleteFromCart(id)}/>
      </div>     
    </div>
  );
};
