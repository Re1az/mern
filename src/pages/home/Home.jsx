import DeleteTodo from "@/todo/DeleteTodo";
import { todoSlice } from "@/todo/todoSlice";
import { Edit } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  console.log(todoSlice);

  const { todos } = useSelector((state) => state.todoSlice);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.gender}</p>
            <p>{todo.age}</p>
            <div>
              <Edit />
              <DeleteTodo id={todo.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
