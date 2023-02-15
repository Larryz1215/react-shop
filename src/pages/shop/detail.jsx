import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

function Detail() {
  const { addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const thisProduct = PRODUCTS.find((prod) => prod.id == productId);

  return (
    <div className="flex flex-col justify-center items-center break-all">
      <div className="mt-10 font-bold text-3xl">
        <h1>Product Detail</h1>
      </div>
      <div className="flex mt-14 space-x-5">
        <div className="mt-2">
          <img className="w-80" src={thisProduct.productImage} />
        </div>
        <div className="flex flex-col w-60 p-2 space-y-4 relative">
          <div>
            <h2 className="font-bold text-xl">{thisProduct.productName}</h2>
            <p>${thisProduct.price}</p>
          </div>
          <p>{thisProduct.description}</p>
          <div className="flex p-2"></div>
          <button
            className="border-2 border-black rounded-3xl p-1 w-full bottom-0 absolute hover:bg-black hover:text-white"
            onClick={() => addToCart(thisProduct.id)}
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
