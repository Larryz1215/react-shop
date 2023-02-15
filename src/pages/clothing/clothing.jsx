import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "../shop/product";
import { GoTop } from "../../components/goTop";

export const ShopClothing = () => {
  return (
    <div className="shop">
      <div className="text text-5xl text-center mt-10">Clothing</div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        )).slice(3, 6)}
      </div>
      <GoTop />
    </div>
  );
};
