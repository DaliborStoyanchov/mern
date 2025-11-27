import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Book } from "../../../models/Book";
import Swal from "sweetalert2";

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

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book added to the Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Book already in the cart",
          text: "Do you want to add the book to your cart again?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Add",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Added!",
              text: "The book has been added to your cart again.",
              icon: "success",
            });
          }
        });
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<Book>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state: CartState) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
