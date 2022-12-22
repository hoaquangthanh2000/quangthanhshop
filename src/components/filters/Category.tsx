import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryFilter, removeCategory } from "./filterSlice";
type Props = {
  category: string;
};

export default function Category({ category }: Props) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const handleFilterCategory = () => {
    setCheck(!check);
    if (!check) {
      dispatch(categoryFilter(category));
    } else {
      dispatch(removeCategory(category));
    }
  };
  return (
    <div className="cursor-pointer" onChange={handleFilterCategory}>
      <input
        type="checkbox"
        value={category}
        className="mx-2"
        defaultChecked={check}
      />
      {category}
    </div>
  );
}
