// wishlistSlice.ts
import { Product, ProductInterface } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: Product[]; // Assuming the wishlist consists of product IDs
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
        const productId = action.payload.id;
      
        // Check if the product is not already in the wishlist
        if (!state.items.some((item) => item.id === productId)) {
          state.items.push(action.payload);
        }
      },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWishlist , removeFromWishlist } = wishlistSlice.actions;
