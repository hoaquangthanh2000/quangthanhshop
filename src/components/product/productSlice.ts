import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./typeitem";

const initState = {
  listProduct: [] as productType[]
}

export const productSlice = createSlice({
  name: "product",
  initialState: initState,
  reducers: {
    setProduct: (state, action) => {
      state.listProduct = (action.payload);
    },
    selectProduct: (state,action) => {
      return {...state,...action.payload}
    }
  },
});
export const { setProduct,selectProduct } = productSlice.actions;
