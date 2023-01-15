import React, { useState, useContext, useEffect } from "react";
import {ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import "./checkout.css";

export const Checkout = () => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );
  const { setCartItemInfo, cartItemInfo, getTotalCartAmount } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const phoneRegExp = /^[0-9]{10}$/g;
  const validate = yup.object({
    fullName: yup.string().max(10, "長度不得超過10").required("姓名不得為空!"),
    phone: yup
      .string()
      .matches(phoneRegExp, "電話格式有誤!")
      .required("電話不得為空!"),
    address: yup.string().required("地址不得為空!"),
  });
  const initOrder = {
    fullName: "",
    phone: "",
    address: "",
  };

  const orderObj = (values, cartItemInfo) => {
    return {
      contact: values,
      cartItemInfo: cartItemInfo,
      totalAmount: getTotalCartAmount(),
    };
  };

  const addOrder = (values, cartItemInfo) => {
    const order = orderObj(values, cartItemInfo);
    setOrders((prev) => [...prev, order]);
    console.log("orders:", orders);
  };

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  return (
    <div className="checkoutForm">
      <button onClick={addOrder}></button>
      <Formik
        initialValues={initOrder}
        validationSchema={validate}
        onSubmit={async (values) => {
          addOrder(values, cartItemInfo);
          await new Promise((r) => setTimeout(r, 500));
          setCartItemInfo([]);
          navigate("/orderlist");
        }}
      >
        <Form>
          <div className="inputFiled">
            <label htmlFor="fullName">姓名</label>
            <InputField
              type="text"
              name="fullName"
              id="fullName"
              placeholder="請輸入姓名..."
            />
          </div>
          <div className="inputFiled">
            <label htmlFor="phone">電話</label>
            <InputField
              type="text"
              name="phone"
              id="phone"
              placeholder="請輸入電話..."
            />
          </div>
          <div className="inputFiled">
            <label htmlFor="addtess">地址</label>
            <InputField
              type="text"
              name="address"
              placeholder="請輸入地址..."
              id="address"
            />
          </div>
          <div className="buttonFiled">
            <button
              type="button"
              className="buttonBack"
              onClick={() => navigate("/cart")}
            >
              返回
            </button>
            <button type="submit" className="buttonSubmit">
              送出
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const InputField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        {...props}
        {...field}
        error={meta.error && true}
        helperText={meta.error}
      />
    </>
  );
};
