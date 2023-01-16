import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "../shop/product";
import { GoTop } from "../../components/goTop";

export const ShopClothing = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Clothing</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>
        )).slice(3,6)}
      </div>
      <GoTop/>
    </div>
  );
};
