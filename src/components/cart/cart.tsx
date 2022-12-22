import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

export default function Cart() {
  const cartItems = useAppSelector(
    (state: RootState) => state.cartItems.listCartItem
  );

  console.log(cartItems);

  return (
    <div className="px-44 w-full">
      <div className="flex flex-row h-11 justify-between items-center border-solid border-opacity-70 border my-2 px-5">
        <div className="w-[30%]">Sản phẩm</div>
        <div className="w-[20%]">Đơn giá</div>
        <div className="flex flex-row w-[15%] justify-center">Số lượng</div>
      </div>
      {cartItems.map((item) => (
        <div className="flex flex-row h-20 justify-between items-center border-solid border-opacity-70 border my-2 px-5 hover:bg-slate-50">
          <div className="w-[30%] flex flex-row">
            <img src={item.cartItem.image} className="w-10" alt="" />
            <p className="two-line-ellipsis ml-1">{item.cartItem.title}</p>
          </div>
          <div className="w-[20%]">{item.cartItem.price}$</div>
          <div className="flex flex-row w-[15%] justify-between border">
            <button className="px-3 border-r">-</button>
            <div className="flex-1 text-center">{item.quantity}</div>
            <button className="px-3 border-l">+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
