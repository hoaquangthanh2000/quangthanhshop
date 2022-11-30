import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListProduct from "./components/product/ListProduct";
import Navbar from "./components/navbar/navbar";
import ProductDetail from "./components/product/ProductDetail";
import Header from "./components/Header";
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex flex-row h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
