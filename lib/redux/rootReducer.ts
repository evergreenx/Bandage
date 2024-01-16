/* Instruments */
import { productsApi } from "@/services/products";
import { counterSlice, wishlistSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  wishlist: wishlistSlice.reducer,

  [productsApi.reducerPath]: productsApi.reducer,
};
