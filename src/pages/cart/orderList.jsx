import React from "react";
import "./orderList.css";

export const OrderList = () => {
  const order = JSON.parse(localStorage.getItem("orders"));

  return (
    <div className="orderList">
      <>
        {order &&
          order.map((data, i) => (
            <div className="order" key={i}>
              <span>訂單:{i + 1}</span>
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
                  <tbody>
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
          ))}
      </>
    </div>
  );
};
