import React, { useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import {  setProduct } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productSeletor } from "../../app/seletor";
import { productType } from "./typeitem";
import Navbar from "../navbar/navbar";
function ListProduct() {
  const dispatch = useDispatch();
  const { listProduct } = useSelector(productSeletor);
  const fetchProductDetail = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProduct(res.data));
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);
  return (
    <div className="flex flex-row">
      <Navbar/>
      <div className="grid grid-cols-4 gap-4 py-12 px-36">
        {listProduct.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}

export default ListProduct;
