/* Instruments */
import { productsApi } from "@/services/products";
import { counterSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,

  [productsApi.reducerPath] : productsApi.reducer
};
