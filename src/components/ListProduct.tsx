import React from 'react'
import Product from './Product'
import axios from "axios";
import { productSlice, setProduct } from "./product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productSeletor } from "../app/seletor";
import { productType } from "./typeitem";
function ListProduct() {
  const dispatch = useDispatch();
  const productList = useSelector(productSeletor);
  console.log(productList);
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
  return (
    <div>
      <Product />
    </div>
  )
}

export default ListProduct
