/* Instruments */
import { productsApi } from "@/services/products";

import { wishlistSlice , cartSlice  } from "./slices";
import { combineReducers } from "@reduxjs/toolkit";


export const reducer = combineReducers({
  wishlist: wishlistSlice.reducer,
  cart: cartSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
