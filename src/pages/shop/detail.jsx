import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

function Detail() {
  const { addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const thisProduct = PRODUCTS.find((prod) => prod.id == productId);

  return (
    <div className="flex flex-col justify-center items-center break-all bg-slate-100">
      <div className="mt-10 font-bold text-3xl">
        <h1>Product Detail</h1>
      </div>
      <div className="flex mt-14 space-x-5 max-sm:h-[240px]">
        <div className="mt-2">
          <img className="w-80 max-md:w-[240px] max-sm:w-[200px]" src={thisProduct.productImage} />
        </div>
        <div className="flex flex-col w-60 p-2 space-y-4 relative">
          <div>
            <h2 className="font-bold text-xl">{thisProduct.productName}</h2>
            <p>${thisProduct.price}</p>
          </div>          
          <p  className="text max-md:text-sm max-sm:text-sm">{thisProduct.description}</p>       
          <button
            className="border-2 border-black rounded-3xl p-1 w-4/5 bottom-2 absolute hover:bg-black hover:text-white"
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
