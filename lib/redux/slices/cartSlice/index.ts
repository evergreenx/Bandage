// cartSlice.ts
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: { product: Product; quantity: number }[];
}

const initialState: CartState = {
  items: [],
};

// Load cart state from localStorage
const storedCartState = typeof localStorage !== 'undefined' ? localStorage.getItem("cartState") : null;
const persistedInitialState: CartState = storedCartState
  ? JSON.parse(storedCartState)
  : initialState;

const cartSlice = createSlice({
  name: "cart",
  initialState: persistedInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }

      // Update localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      // Update localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ product: Product; currentQuantity: number }>) => {
      const { product, currentQuantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity = currentQuantity;
      } else {
        state.items.push({ product, quantity: currentQuantity });
      }

      // Update localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } =
  cartSlice.actions;
export { cartSlice };
