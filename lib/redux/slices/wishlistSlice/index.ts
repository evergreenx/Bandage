// wishlistSlice.ts
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: Product[]; // Assuming the wishlist consists of product IDs
}

const initialState: WishlistState = {
  items: [],
};

// Load wishlist state from localStorage
const storedWishlistState = typeof localStorage !== 'undefined' ? localStorage.getItem("wishlistState") : null;
const persistedWishlistInitialState: WishlistState = storedWishlistState
  ? JSON.parse(storedWishlistState)
  : initialState;

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: persistedWishlistInitialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;

      // Check if the product is not already in the wishlist
      if (!state.items.some((item) => item.id === productId)) {
        state.items.push(action.payload);

        // Update localStorage
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem("wishlistState", JSON.stringify(state));
        }
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Update localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("wishlistState", JSON.stringify(state));
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
