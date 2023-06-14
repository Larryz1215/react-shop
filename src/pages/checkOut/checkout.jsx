import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";

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

  const handleSubmit = async (values) => {
    addOrder(values, cartItemInfo);
    await new Promise((r) => setTimeout(r, 500));
    setCartItemInfo([]);
    navigate("/orderlist");
  };

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] ">
      <Formik
        initialValues={initOrder}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        <Form className="w-[400px] p-4 rounded-3xl shadow-[0_3px_15px] shadow-gray-500 dark:bg-slate-200">
          <div className="flex justify-center items-center my-8 h-12">
            <label className="text text-2xl font-bold mr-2" htmlFor="fullName">
              姓名
            </label>
            <InputField
              className="w-[300px]"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="請輸入姓名..."
            />
          </div>
          <div className="flex justify-center items-center my-8 h-12">
            <label className="text text-2xl font-bold mr-2" htmlFor="phone">
              電話
            </label>
            <InputField
              className="w-[300px]"
              type="text"
              name="phone"
              id="phone"
              placeholder="請輸入電話..."
            />
          </div>
          <div className="flex justify-center items-center my-8 h-12">
            <label className="text text-2xl font-bold mr-2">地址</label>
            <InputField
              className="w-[300px]"
              type="text"
              name="address"
              placeholder="請輸入地址..."
              id="address"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="text text-xl w-1/2 bg-green-600 text-white p-2 m-2 rounded-2xl hover:text-2xl hover:bg-green-700"
              onClick={() => navigate("/cart")}
            >
              返回
            </button>
            <button
              type="submit"
              className="text text-xl w-1/2 bg-red-400 text-white p-2 m-2 rounded-2xl hover:text-2xl hover:bg-red-600"
            >
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