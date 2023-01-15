import React from "react";
import { PRODUCTS} from "../../Products";
import { Product } from "../shop/product";

export const ShopFood = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Food</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        )).slice(6,9)}
      </div>
    </div>
  );
};
