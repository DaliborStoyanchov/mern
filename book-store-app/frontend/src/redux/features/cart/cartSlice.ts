import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Book } from "../../../models/Book";

interface CartState {
  cartItems: Book[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Book>) => {
      const existingItem = state.cartItems.find(
        (item: Book) => item._id === action.payload._id
      );

      if (!existingItem) {
        state.cartItems.push(action.payload);

        alert("Item added successfully");
      } else {
        alert("Item already exists");
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
