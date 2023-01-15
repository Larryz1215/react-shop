import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import Detail from "./pages/shop/detail";
import { ShopContextProvider } from "./context/shopContext";
import { Shop3C } from "./pages/3c/3c";
import { ShopClothing } from "./pages/clothing/clothing";
import { ShopFood } from "./pages/food/food";
import { ShopDaily } from "./pages/daily/daily";
import { Checkout } from "./pages/cart/checkout";
import { OrderList } from "./pages/cart/orderList";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/3c" element={<Shop3C />} />
            <Route path="/clothing" element={<ShopClothing />} />
            <Route path="/food" element={<ShopFood />} />
            <Route path="/daily" element={<ShopDaily />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:productId" element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orderlist" element={<OrderList />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
