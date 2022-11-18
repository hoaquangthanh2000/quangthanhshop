import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
export const productSeletor = (state: RootState) => state.product;
