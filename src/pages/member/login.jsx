import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import { TextField } from "@mui/material";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ShopContext } from "../../context/shopContext";
import { Register } from "./register";

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [member, setMember] = useState([]);
  //const [loginSuccess, setLoginSuccess] = useState(true);
  const { setIsLogin } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleVisible = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const initMember = {
    username: "",
    password: "",
  };
  const validate = yup.object({
    username: yup
      .string()
      .min(2, "長度不得小於2")
      .required("使用者姓名不得為空!"),
    password: yup
      .string()
      .min(8, "密碼長度不得小於8位")
      .max(16, "密碼長度不得超過16位")
      .required("密碼不得為空!"),
  });

  const userData = (value) => {
    return {
      data: value,
    };
  };
  const addUser = (value) => {
    const data = userData(value);
    setMember((prev) => [...prev, data]);
  };

  const handleSubmit = (value) => {
    addUser(value);

    //setIsLogin(true);
    //navigate("/");
  };
  useEffect(() => {
    localStorage.setItem("member", JSON.stringify(member));
  }, [member]);

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
              value={usernameInput}
              label="username"
              type="text"
              name="username"
              id="username"
              className="border-gray border-2 rounded-lg  p-2 w-full"
              //onChange={handleUsername}
            />
          </div>
          <div className="flex flex-row justify-center items-center space-x-3 mb-5 relative ">
            <InputField
              value={passwordInput}
              //onChange={handlePassword}
              label="password"
              type={passwordType}
              name="password"
              id="password"
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
          <button
            type="submit"
            className="text  text-xl text-white rounded-lg border-2 bg-red-500 h-10"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-5 w-[320px]  border-2 rounded-lg ">
        <div id="formTitle" className="flex flex-row justify-around">
          <h2 className="text-blue-700 text-2xl">Login</h2>
        </div>
        <LoginForm />
      </div>
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
export default Login;
