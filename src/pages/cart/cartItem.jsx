import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const CartItem = (props) => {
  const { id, productName, price, productImage, quantity } = props.data;
  const { addToCart, removeFromCart, updateCartItemCount, deleteFromCart } =
    useContext(ShopContext);
  return (
    <div
      className="flex items-center w-[650px] h-[200px] m-7 p-3 shadow-[0px_3px_15px_gray] rounded-3xl  max-md:w-[560px] max-sm:w-[380px]"
      key={id}
    >
      <img className="w-[180px] max-sm:w-32" src={productImage} />
      <div className="w-full text-xl font-bold max-md:w-[120px] max-sm:w-24 max-sm:text-sm">
        <h4>{productName}</h4>
        <p>$ {price}</p>
      </div>
      <div className="flex justify-center items-center h-full p-1 max-sm:w-[120px]">
        <button
          className="w-10  text-5xl mx-2 bg-white rounded-full hover:bg-gray-200 max-sm:text-xl"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="m-1 w-10 text-center font-bold max-sm:w-5"
          value={quantity}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button
          className="w-10 text-5xl mx-2 bg-white rounded-full hover:bg-gray-200 max-sm:w-4 max-sm:text-xl"
          onClick={() => addToCart(id)}
        >
          +
        </button>
        <div className="text-red-600 text-4xl w-12 cursor-pointer hover:text-red-500 max-sm:text-2xl">
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
};
