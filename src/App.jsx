import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/home/Home";
import NotFound from "./features/not-found/NotFound";
import Rootlayout from "./components/Rootlayout";
import AddBlog from "./features/blogs/AddBlog";

export default function App() {
  const data = [
    { id: 1, name: "ram" },
    { id: 2, name: "shyam" },
  ];

  const func = () => {
    return { id: 1, name: "ram" };
  };

  const func1 = () => ({ id: 1, name: "ram" });

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
          path: "addblog",
          element: <AddBlog />,
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
