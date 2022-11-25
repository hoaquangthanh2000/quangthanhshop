import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" h-14 border shadow-md px-52 flex justify-around items-center">
        <Link to="/" className="h-full w-full flex flex-row items-center">
            <div className=" text-xl text-red-500 font-semibold ">abc</div>
            <img
              src="https://cdn.pixabay.com/photo/2021/06/18/08/24/batman-6345505_1280.png"
              alt=""
              className="h-7"
            />
        </Link>
        <div className="flex  h-full">
          <div className="min-w-[100px] cursor-pointer hover:bg-slate-100 h-full flex items-center">
            Trang chủ
          </div>
          <div className="min-w-[100px] cursor-pointer hover:bg-slate-100 h-full flex items-center">
            Thông tin
          </div>
        </div>
      </header>
  )
}
