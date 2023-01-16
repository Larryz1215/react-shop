import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const CartItem = (props) => {
  const { id, productName, price, productImage, quantity } = props.data;
  const { addToCart, removeFromCart, updateCartItemCount, deleteFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <img src={productImage} />
      <div className="description">
        <h4>{productName}</h4>
        <p>$ {price}</p>
      </div>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input
          value={quantity}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}>+</button>
        <div className="deleteItem">
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
};
