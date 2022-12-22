import { useParams } from "react-router-dom";
import { productType } from "./typeitem";
import axios from "axios";
import "./style.css";
import { FaSpinner } from "react-icons/fa";
import {
  selectProduct,
  removeProduct,
  fetchProductDetail,
} from "./productSlice";
import { addCartItem } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";

interface item {
  product: productType;
}
function ProductDetail() {
  const dispatch = useAppDispatch();
  let productSelector = useSelector(
    (state: RootState) => state.product.productSelect
  );
  let stateProduct = useAppSelector((state: RootState) => state.product.status);
  const { productId } = useParams();
  useEffect(() => {
    if (productId) {
      dispatch(removeProduct());
      setTimeout(() => {
        dispatch(fetchProductDetail(Number(productId)));
      });
    }
  }, [productId]);

  return (
    <div className=" w-full flex justify-center max-h-[515px] ">
      <div className="flex flex-row w-[40rem] p-9 bg-slate-200 justify-center items-center">
        {stateProduct === "loading" ? (
          <div className="lds-hourglass"></div>
        ) : (
          <>
            <div className=" p-10">
              <img src={productSelector.image} alt="" className="w-[14rem]" />
            </div>
            <div className="flex-1 flex flex-col pt-10 gap-2">
              <div className="text-2xl font-bold">
                {productSelector.category}
              </div>
              <div className="text-lg">{productSelector.price}$</div>
              <div className="text-lg nine-line-ellipsis">
                {productSelector.description}{" "}
              </div>
              <div className="bg-slate-900 h-12 flex items-center justify-evenly rounded-lg mt-6 cursor-pointer">
                <i className="fa-solid fa-cart-shopping text-white"></i>
                <div
                  className="text-white "
                  onClick={() =>
                    dispatch(
                      addCartItem({
                        cartItem: productSelector,
                        quantity: 1,
                      })
                    )
                  }
                >
                  Thêm sản phẩm
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
