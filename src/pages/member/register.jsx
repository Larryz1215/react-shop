import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { Formik, Form, useField } from "formik";
import { TextField } from "@mui/material";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [memberData, setMemberData] = useState({
    username: "",
    password: "",
    phone: "",
  });
  const { setIsLogin } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleVisible = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const phoneRegExp = /^[0-9]{10}$/g;
  const initMember = {
    username: "",
    password: "",
    phone: "",
  };
  const validate = yup.object({
    username: yup
      .string()
      .min(2, "長度不得小於2")
      .required("使用者姓名不得為空!"),
    password: yup
      .string()
      .min(8, "密碼長度不得小於8")
      .max(16, "密碼長度不得超過16位")
      .required("密碼不得為空!"),
    phone: yup
      .string()
      .required("電話號碼不得為空!")
      .matches(phoneRegExp, "電話格式有誤!"),
  });

  const handleUsername = (data) => {
    setMemberData(data);
    console.log(memberData);
  };

  const handleSubmit = (data) => {
    handleUsername(data);
    // navigate("/orderList")
    setIsLogin(true);
    //navigate("/");
  };
  useEffect(() => {
    localStorage.setItem("memberData", JSON.stringify(memberData));
  }, [memberData]);
  return (
    <div>
      <Formik
        initialValues={initMember}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col p-5 mt-5">
          <div className="flex flex-row justify-center items-center space-x-3 mb-5 ">
            <InputField
              value={memberData.username}
              type="text"
              name="username"
              id="username"
              label="username"
              className="border-gray border-2 rounded-lg  p-2 w-full"
            />
          </div>
          <div className="flex flex-row justify-center items-center space-x-3 mb-5 relative ">
            <InputField
              type={passwordType}
              name="password"
              id="password"
              value={memberData.password}
              label="password"
              autoComplete=""
              className="border-gray border-2 rounded-lg  p-2 w-full"
            />
            <div className="right-2 top-5 absolute">
              {passwordType === "password" ? (
                <VisibilityOffIcon onClick={handleVisible} color="action" />
              ) : (
                <VisibilityIcon onClick={handleVisible} color="action" />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3 mb-5 ">
            <InputField
              value={memberData.phone}
              type="text"
              name="phone"
              id="phone"
              label="phone"
              className="border-gray border-2 rounded-lg  p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="text  text-xl text-white rounded-lg border-2 bg-red-500 h-10"
          >
            Register
          </button>
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
export default Register;
