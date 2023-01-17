import React from "react";
import "./orderList.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 as uuidv4 } from "uuid";
export const OrderList = () => {
  const order = JSON.parse(localStorage.getItem("orders"));

  return (
    <>
      {order != null ? (
        order.map((data, i) => (
          <div className="orderList" key={uuidv4()}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="order">
                  <h4>訂單{i + 1}</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <table>
                    <thead>
                      <tr>
                        <td>姓名</td>
                        <td>電話</td>
                        <td style={{ width: "60%" }}>地址</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{data.contact.fullName}</td>
                        <td>{data.contact.phone}</td>
                        <td style={{ width: "60%" }}>{data.contact.address}</td>
                      </tr>
                    </tbody>
                  </table>
                </Typography>
                <Typography>
                  <table>
                    <thead>
                      <tr>
                        <td>商品</td>
                        <td>價格</td>
                        <td>數量</td>
                        <td>小計</td>
                      </tr>
                    </thead>
                    {data.cartItemInfo.map((item) => (
                      <tbody key={uuidv4()}>
                        <tr>
                          <td>{item.productName}</td>
                          <td>${item.price}</td>
                          <td>x{item.quantity}</td>
                          <td>{item.totalAmount}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  <div className="totalPrice">
                    <p>總金額:${data.totalAmount}</p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      ) : (
        <h3>查無訂購清單</h3>
      )}

      {/* {order != null ? (
        order.map((data, i) => (
          <div className="orderList" key={uuidv4()}>
            <h1>訂購清單</h1>
            <div className="order">
              <span>訂單{i + 1}</span>
              <table>
                <thead>
                  <tr>
                    <td>姓名</td>
                    <td>電話</td>
                    <td style={{ width: "60%" }}>地址</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.contact.fullName}</td>
                    <td>{data.contact.phone}</td>
                    <td style={{ width: "60%" }}>{data.contact.address}</td>
                  </tr>
                </tbody>
              </table>

              <table>
                <thead>
                  <tr>
                    <td>商品</td>
                    <td>價格</td>
                    <td>數量</td>
                    <td>小計</td>
                  </tr>
                </thead>
                {data.cartItemInfo.map((item) => (
                  <tbody key={uuidv4()}>
                    <tr>
                      <td>{item.productName}</td>
                      <td>${item.price}</td>
                      <td>x{item.quantity}</td>
                      <td>{item.totalAmount}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <p>總金額:${data.totalAmount}</p>
            </div>
          </div>
        ))
      ) : (
        <h3>查無訂購清單</h3>
      )} */}
    </>
  );
};
