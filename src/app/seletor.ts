import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { productType } from "../components/product/typeitem";

// export const productSelector = (state: RootState) => state.product.productSelect
export const listProductSelector = (state: RootState) => state.product.listProduct;
export const filterCategorySelector = (state: RootState) => state.filters.categories


export const productRemainingSelector = createSelector(
    listProductSelector,
    filterCategorySelector,
    (productList, categories) => {
        console.log("categories", categories)
        return productList.filter((product:productType) => (categories.length > 0 ? categories.map(item => item.toLocaleLowerCase()).includes(product.category) : true)  )
    }
)