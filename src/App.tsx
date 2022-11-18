import React from "react";
import "./App.css";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="App">
      <header className=" h-14 border shadow-md px-52 flex justify-around items-center">
        <div className="h-full w-full flex flex-row items-center">
          <div className=" text-xl text-red-500 font-semibold ">
            Quang Thanh Shop
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2021/06/18/08/24/batman-6345505_1280.png"
            alt=""
            className="h-7"
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-row">Trang chủ</div>
          <div>Thông tin</div>
        </div>
      </header>
      <div className="">
        <ListProduct/>
      </div>
    </div>
  );
}

export default App;
