import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Rootlayout from "./components/Rootlayout";

import Form from "./components/form";
import TodoAddForm from "./todo/TodoAddForm";
import TodoUpdateForm from "./todo/TodoUpdateForm";
import PostForm from "./post/PostForm";

export default function App() {
  const data = [
    { id: 1, name: "ram" },
    { id: 2, name: "shyam" },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "form",
          element: <Form />,
        },
        {
          path: "add-todo",
          element: <TodoAddForm />,
        },
        {
          path: "update-todos/:id",
          element: <TodoUpdateForm />,
        },
        {
          path: "add-post",
          element: <PostForm />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
