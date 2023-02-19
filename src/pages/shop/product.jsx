import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col justify-center items-center w-60 my-24 group">
      <Link to={`/shop/detail/${id}`}>
        <img className="w-60 group-hover:opacity-90 group-hover:scale-110" src={productImage} />
      </Link>
      <div className="text text-center my-5 group-hover:text-blue-600">
        <b>{productName}</b>
        <p>${price}</p>
      </div>
      <button
        className="border-2 border-black rounded-3xl p-2 hover:bg-black hover:text-white"
        onClick={() => addToCart(id)}
      >
        加入購物車
      </button>
    </div>
  );
};
