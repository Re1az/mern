import { todoSlice } from "@/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
  },
});
