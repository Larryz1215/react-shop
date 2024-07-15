import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./product";
import { GoTop } from "../../components/goTop";

export const Shop = () => {
  return (
    <>
      <div className="mt-10 text-center text-5xl grow dark:text-white">
        <h2>Larry shop</h2>
        {/* <h3>test</h3> */}
      </div>
      <div className="grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      <GoTop />
    </>
  );
};
