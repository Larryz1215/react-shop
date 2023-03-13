import React from "react";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 as uuidv4 } from "uuid";
export const OrderList = () => {
  const order = JSON.parse(localStorage.getItem("orders"));

  return (
    <>
      {order != null ? (
        order.map((data, i) => (
          <div
            className="flex flex-col justify-center items-center  mx-10 max-md:w-[600px] max-sm:w-[320px]"
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
              <hr/>
              <table className="m-4 w-[500px]  max-sm:w-[320px]">
                <thead className="w-full">
                  <tr className="text-xl">
                    <td>姓名</td>
                    <td>電話</td>
                    <td className="w-3/5">地址</td>
                  </tr>
                </thead>
                <tbody className="w-full">
                  <tr className="text-xl">
                    <td>{data.contact.fullName}</td>
                    <td>{data.contact.phone}</td>
                    <td className="w-3/5">{data.contact.address}</td>
                  </tr>
                </tbody>
              </table>
              <hr/>
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
      ) : (
        <h3>查無訂購清單</h3>
      )}
    </>
  );
};
