import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" h-20 border shadow-md px-52 flex justify-between items-center">
      <Link to="/" className="h-full flex flex-row items-center">
        <div className=" text-xl text-red-500 font-semibold ">Thanh dep trai</div>
        <img
          src="https://cdn.pixabay.com/photo/2021/06/18/08/24/batman-6345505_1280.png"
          alt=""
          className="h-7"
        />
      </Link>
      <div className="">
        
        <input type="text" className="border min-w-[330px]">

        </input>
      </div>
      <div className="flex h-full">
        <Link to="/">
          <div className="min-w-[100px] cursor-pointer hover:bg-slate-100 h-full flex items-center">
            Trang chủ
          </div>
        </Link>
        <div className="min-w-[100px] cursor-pointer hover:bg-slate-100 h-full flex items-center">
          Thông tin
        </div>
      </div>
    </header>
  );
}
