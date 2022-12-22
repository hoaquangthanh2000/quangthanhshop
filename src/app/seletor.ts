import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { productType } from "../components/product/typeitem";

export const listProductSelector = (state: RootState) =>
  state.product.listProduct;
export const filterCategorySelector = (state: RootState) =>
  state.filters.categories;
export const filterSearchText = (state: RootState) => state.filters.search;

export const productRemainingSelector = createSelector(
  listProductSelector,
  filterCategorySelector,
  filterSearchText,
  (productList, categories, search) => {
    return productList.filter((product: productType) =>
      categories.length > 0
        ? categories
            .map((item) => item.toLocaleLowerCase())
            .includes(product.category)
        : true &&
          product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
);
