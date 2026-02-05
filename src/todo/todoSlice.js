import { getTodoFromLocal, setTodoLocal } from "@/local/local";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: getTodoFromLocal(),
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setTodoLocal(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setTodoLocal(state.todos);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
      });
      setTodoLocal(state.todos);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
