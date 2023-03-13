import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col justify-center items-center rounded-xl w-60 my-12 relative overflow-hidden group transition-all animate-fadeIn dark:bg-slate-900">
      <div className="w-full h-18 group-hover:opacity-90 group-hover:scale-110 duration-300 bg-white">
        <Link to={`/shop/detail/${id}`}>
          <img src={productImage} />
        </Link>
      </div>

      <div className="text text-center my-5 group-hover:text-blue-600 dark:text-white">
        <b>{productName}</b>
        <p>${price}</p>
      </div>
      <button
        className="border-2 border-gray-400 mb-2 rounded-3xl p-2 hover:bg-black hover:text-white dark:text-white dark:bg-slate-700 dark:hover:bg-slate-500"
        onClick={() => addToCart(id)}
      >
        加入購物車
      </button>
    </div>
  );
};
