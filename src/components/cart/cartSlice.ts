import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../product/typeitem";
import { listCartState } from "./cartItem.state";

export const initState: listCartState = {
  listCartItem: [],
};

export const cartSlice = createSlice({
  name: "cartItem",
  initialState: initState,
  reducers: {
    addCartItem: (
      state,
      action: PayloadAction<{ cartItem: productType; quantity: number }>
    ) => {
      if (
        state.listCartItem.every(
          (item) => item.cartItem.id !== action.payload.cartItem.id
        )
      ) {
        state.listCartItem = state.listCartItem.concat(action.payload);
        console.log("listCartItem:", state.listCartItem);
      } else {
        state.listCartItem.map((item) => {
          if (item.cartItem.id === action.payload.cartItem.id) {
            item.quantity++;
          }
        });
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
