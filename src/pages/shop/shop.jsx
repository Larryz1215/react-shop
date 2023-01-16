import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./product";

import "./shop.css";
import { GoTop } from "../../components/goTop";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Larry shop</h2>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      <GoTop />
    </div>
  );
};
