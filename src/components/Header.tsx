import React from "react";
import { Link } from "react-router-dom";
import Search from "./filters/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { auth } from "../firebase";

export default function Header() {
  const totalCartItem = useAppSelector(
    (state: RootState) => state.cartItems.listCartItem
  );
  console.log(auth.signOut);
  return (
    <header className=" h-20 border shadow-md px-52 flex justify-between items-center">
      <Link to="/home" className="h-full flex flex-row items-center">
        <div className=" text-xl text-red-500 font-semibold ">
          Thanh dep trai
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2021/06/18/08/24/batman-6345505_1280.png"
          alt=""
          className="h-7"
        />
      </Link>
      <Search />
      <div className="flex h-full justify-between">
        <Link to="/home">
          <div className="min-w-[100px] cursor-pointer hover:bg-slate-100 h-full flex items-center">
            Trang chủ
          </div>
        </Link>
        <div className="min-w-[100px] cursor-pointer hover:bg-slate-100 h-full flex items-center">
          Thông tin
        </div>

        <Link
          className="flex items-center min-w-[100px] cursor-pointer"
          to="/cart"
        >
          <FontAwesomeIcon icon={faCartShopping} /> ({totalCartItem.length})
        </Link>
        <Link className="flex min-w-[100px] items-center cursor-pointer" to="/">
          <button onClick={() => auth.signOut()}>SignOut</button>
        </Link>
      </div>
    </header>
  );
}
