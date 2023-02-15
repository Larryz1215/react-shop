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
      className="flex items-center w-[650px] h-[200px] m-7 p-3 shadow-[0px_3px_15px_gray] rounded-3xl  max-md:w-[500px] max-sm:w-[380px]"
      key={id}
    >
      <img className="w-[180px] max-sm:w-32" src={productImage} />
      <div className="w-full text-xl p-4 max-md:w-[120px] max-sm:w-24">
        <h4>{productName}</h4>
        <p>$ {price}</p>
      </div>
      <div className="flex justify-center items-center h-14 p-1 max-md:w-[120px]">
        <button
          className="w-10  text-5xl mx-2 bg-white rounded-full hover:bg-gray-200 max-sm:w-4"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="m-1 w-10 text-center font-bold"
          value={quantity}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button
          className="w-10 text-5xl mx-2 bg-white hover:bg-gray-200 max-sm:w-4"
          onClick={() => addToCart(id)}
        >
          +
        </button>
        <div className="ml-4 text-red-600 text-4xl h-full w-12 cursor-pointer hover:text-red-500 max-sm:text-3xl">
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
};
