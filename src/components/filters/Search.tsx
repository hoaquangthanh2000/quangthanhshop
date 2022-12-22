import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "./../../app/hooks";
import { filterSearch } from "./filterSlice";

export default function Search() {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");
  const changeInput = (e: { target: { value: string } }) => {
    dispatch(filterSearch(e.target.value));
  };

  return (
    <div className="flex flex-row border">
      <input
        type="text"
        className="outline-0 min-w-[330px]"
        onChange={changeInput}
      ></input>
      <div className="m-auto cursor-pointer">
        <FaSearch className="w-7 h-7" />
      </div>
    </div>
  );
}
