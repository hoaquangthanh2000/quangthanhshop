import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./../typeitem";

export const productSlice = createSlice({
  name: "product",
  initialState: [] as productType[],
  reducers: {
    setProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { setProduct } = productSlice.actions;
