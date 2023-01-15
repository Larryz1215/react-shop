import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import "./detail.css";
function Detail() {
  const { cartItemInfo, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { productId } = useParams();
  const thisProduct = PRODUCTS.find((prod) => prod.id == productId);
  const data = cartItemInfo.find((prop) => prop.id == productId);

  return (
    <div className="detail">
      <div className="detailTitle">
        <h1>Product Detail</h1>
      </div>
      <div className="detailDescription">
        <div className="detailLeft">
          <img src={thisProduct.productImage} />
        </div>
        <div className="detailRight">
          <div>
            <h2>{thisProduct.productName}</h2>
            <p>${thisProduct.price}</p>
          </div>
          <p>{thisProduct.description}</p>
          <div className="btnField">
            <button onClick={() => removeFromCart(thisProduct.id)}>-</button>
            <input
              value={data ? data.quantity : 0}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), thisProduct.id)
              }
            />
            <button onClick={() => addToCart(thisProduct.id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
