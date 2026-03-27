import { createSlice } from "@reduxjs/toolkit";
import {
  clearCartFromLocal,
  getCartFromLocal,
  setCartToLocal,
} from "../local/local.js";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: getCartFromLocal(),
  },
  reducers: {
    setCart: (state, action) => {
      const isExist = state.cart.find((item) => item.id === action.payload.id);

      if (isExist) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
      } else {
        state.cart.push(action.payload);
      }

      setCartToLocal(state.cart);
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      setCartToLocal(state.cart);
    },

    clearCart: (state) => {
      state.cart = [];
      clearCartFromLocal();
    },
  },
});

export const { setCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
