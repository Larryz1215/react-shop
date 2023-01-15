import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "../shop/product";

export const Shop3C = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>3C</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>
        )).slice(0,3)}
      </div>
    </div>
  );
};
