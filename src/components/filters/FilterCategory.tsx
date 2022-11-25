import React, { useState } from "react";
import Category from "./Category";

export default function FilterCategory() {
    const categories = ["Men's clothing", "Jewelery", "Electronics"];
  
  return (
    <div className="w-full mt-7">
      <div className="text-lg my-4">Theo danh mục</div>
      <div className="pl-3">
      {categories.map((category, index) => (
         <Category category={category}/>
       ))}
      </div>
    </div>
  );
}