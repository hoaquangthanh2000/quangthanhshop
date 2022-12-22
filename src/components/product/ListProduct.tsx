import "./style.css";
import React, { useEffect } from "react";
import Product from "./Product";
import { fetchProducts } from "./productSlice";
import { useSelector } from "react-redux";
import { productRemainingSelector } from "../../app/seletor";
import Navbar from "../navbar/navbar";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { RootState } from "../../app/store";
import { FaSpinner } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function ListProduct() {
  const dispatch = useAppDispatch();
  const listProduct = useSelector(productRemainingSelector);
  let stateProduct = useAppSelector((state: RootState) => state.product.status);
  useEffect(() => {
    dispatch(fetchProducts("https://fakestoreapi.com/products"));
  }, []);
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="flex flex-1 justify-center ">
        {stateProduct === "loading" ? (
          <FaSpinner className="m-auto w-24 h-24 abc" />
        ) : (
          <div className="grid grid-cols-4 gap-4 py-12 mx-5">
            {listProduct.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListProduct;
