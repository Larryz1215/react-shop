import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "../shop/product";

export const ShopDaily = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Daily</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>
        )).slice(9,12)}
      </div>
    </div>
  );
};
