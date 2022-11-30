import React, { useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import { setProduct } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productRemainingSelector } from "../../app/seletor";
import { productType } from "./typeitem";
import Navbar from "../navbar/navbar";
function ListProduct() {
  const dispatch = useDispatch();
  const listProduct = useSelector(productRemainingSelector);
  console.log(listProduct);
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
      <div className="flex flex-1 justify-center">
        <div className="grid grid-cols-4 gap-4 py-12 mx-5">
          {listProduct.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
  );
}

export default ListProduct;
