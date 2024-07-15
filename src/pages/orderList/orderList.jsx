import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 as uuidv4 } from "uuid";
export const OrderList = () => {
  const order = JSON.parse(localStorage.getItem("orders"));
  const navigate = useNavigate();
  const { isLogin } = useContext(ShopContext);
  return (
    <>
      {
        // order != null && isLogin ? (
        order.map((data, i) => (
          <div
            className="flex flex-col justify-center items-center  mx-5 max-md:w-[600px] max-sm:w-[360px]"
            key={uuidv4()}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="flex flex-col rounded-xl">
                  訂單{i + 1}
                </Typography>
              </AccordionSummary>
              <hr />
              <div className="m-4 w-[500px]  max-sm:w-[320px]">
                <div className="text-xl space-y-3">
                  <div className="flex flex-row justify-between">
                    <p>姓名:</p>
                    <p>{data.contact.fullName}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>電話:</p>
                    <p>{data.contact.phone}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>地址:</p>
                    <p>{data.contact.address}</p>
                  </div>
                </div>
              </div>
              <hr />
              <table className="m-4 w-[500px] max-sm:w-[320px]">
                <thead>
                  <tr className="text text-xl max-sm:text-sm">
                    <td>商品</td>
                    <td>價格</td>
                    <td>數量</td>
                    <td>小計</td>
                  </tr>
                </thead>
                {data.cartItemInfo.map((item) => (
                  <tbody key={uuidv4()}>
                    <tr className="text  max-sm:text-xs">
                      <td>{item.productName}</td>
                      <td>${item.price}</td>
                      <td>x{item.quantity}</td>
                      <td>{item.totalAmount}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <div className="flex  justify-end text-2xl max-sm:text-lg p-2">
                <p>總金額:${data.totalAmount}</p>
              </div>
            </Accordion>
          </div>
        ))
        // ) : (
        //   <div className="flex flex-col justify-center items-center space-y-5  mx-5 max-md:w-[600px] max-sm:w-[360px]">
        //     <h1>請登入會員</h1>
        //     <button
        //       className="text text-white bg-red-600 p-3 rounded-xl"
        //       onClick={() => {
        //         setTimeout(() => {
        //           navigate("/login");
        //         }, 1000);
        //       }}
        //     >
        //       會員登入
        //     </button>
        //   </div>
        // )
      }
    </>
  );
};
