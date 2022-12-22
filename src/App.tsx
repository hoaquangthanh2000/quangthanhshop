import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListProduct from "./components/product/ListProduct";
import Navbar from "./components/navbar/navbar";
import ProductDetail from "./components/product/ProductDetail";
import Header from "./components/Header";
import Test from "./components/Test";
import Cart from "./components/cart/cart";
import SignIn from "./features/Auth/pages/SignIn";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/home" element={<ListProduct />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
