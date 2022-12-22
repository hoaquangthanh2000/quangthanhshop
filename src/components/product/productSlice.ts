import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productType } from "./typeitem";

export interface ProductState {
  listProduct: productType[];
  productSelect: productType;
  status: "idle" | "loading" | "failed";
}

const initState: ProductState = {
  listProduct: [],
  productSelect: {} as productType,
  status: "loading",
};

export const fetchProductDetail = createAsyncThunk(
  "product/fetchProductDetail",
  async (id: number) => {
    return await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.data);
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProductDetail",
  async (item: string) => {
    return await axios.get(item).then((res) => res.data);
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initState,
  reducers: {
    setProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    selectProduct: (state, action) => {
      state.productSelect = action.payload;
    },
    removeProduct: (state) => {
      state.productSelect = initState.productSelect;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = "idle";
        state.productSelect = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.listProduct = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { setProduct, selectProduct, removeProduct } =
  productSlice.actions;
export default productSlice.reducer;
