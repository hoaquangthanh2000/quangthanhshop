import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./typeitem";

const initState = {
  listProduct: [] as productType[],
  productSelect:{} as productType
}

export const productSlice = createSlice({
  name: "product",
  initialState: initState,
  reducers: {
    setProduct: (state, action) => {
      state.listProduct = (action.payload);
    },
    selectProduct: (state,action) => {
      state.productSelect = (action.payload)
    },
    removeProduct: (state,action) => {
      if(action.payload){
        state.productSelect = initState.productSelect
      }
    }
  },
});
export const { setProduct,selectProduct,removeProduct } = productSlice.actions;
