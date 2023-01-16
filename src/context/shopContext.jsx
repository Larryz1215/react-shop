import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";
export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
  const [cartItemInfo, setCartItemInfo] = useState([]);
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItemInfo.map((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  function getProductQuantity(id) {
    const quantity = cartItemInfo.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  const getItemInfo = (id) => {
    let itemInfo = PRODUCTS.find((product) => product.id === id);
    return itemInfo;
  };

  const addToCart = (itemId) => {
    const quantity = getProductQuantity(itemId);
    const data = getItemInfo(itemId);
    if (quantity === 0) {
      setCartItemInfo([
        ...cartItemInfo,
        { ...data, id: itemId, quantity: 1, totalAmount: data.price },
      ]);
    } else {
      setCartItemInfo(
        cartItemInfo.map((product) =>
          product.id === itemId
            ? {
                ...product,
                quantity: product.quantity + 1,
                totalAmount: data.price * (product.quantity + 1),
              }
            : product
        )
      );
    }
    
    console.log("cartItemInfo:", cartItemInfo);
  };

  const removeFromCart = (itemId) => {
    const quantity = getProductQuantity(itemId);

    if (quantity === 1) {
      deleteFromCart(itemId);
    } else {
      setCartItemInfo(
        cartItemInfo.map((product) =>
          product.id === itemId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };
  const deleteFromCart = (id) => {
    setCartItemInfo((cartItemInfo) =>
      cartItemInfo.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  };

  const updateCartItemCount = (newAmount, itemId) => {
    if (newAmount === 0) {
      alert("請重新輸入數量!!");
    } else {
      setCartItemInfo(
        cartItemInfo.map((product) =>
          product.id === itemId ? { ...product, quantity: newAmount } : product
        )
      );
    }
  };
  const contextValue = {
    cartItemInfo,
    setCartItemInfo,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    deleteFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
