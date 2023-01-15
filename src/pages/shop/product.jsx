import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  

  return (
    <div className="product">
      <Link to={`/shop/${id}`}>
        <img src={productImage} />
      </Link>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addBtn" onClick={() => addToCart(id)}>
       加入購物車
      </button>
    </div>
  );
};
