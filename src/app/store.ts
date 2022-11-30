import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productSlice } from '../components/product/productSlice';
import { filterSlice } from '../components/filters/filterSlice';

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    filters: filterSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
