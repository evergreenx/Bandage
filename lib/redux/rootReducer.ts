/* Instruments */
import { productsApi } from "@/services/products";

import { counterSlice, wishlistSlice } from "./slices";
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export const reducer = combineReducers({
  counter: counterSlice.reducer,
  wishlist: wishlistSlice.reducer,
cart : cartSlice,

  [productsApi.reducerPath]: productsApi.reducer,
});


