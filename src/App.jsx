import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import MealList from "./pages/Meals/MealList.jsx";
import Rootlayout from "./components/Rootlayout";
import Mealdetails from "./pages/Meals/Mealdetails";
import SearchMeal from "./pages/Meals/SearchMeal";

export default function App() {
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
          path: "meal-list/:category",
          element: <MealList />,
        },
        {
          path: "meal-details/:id",
          element: <Mealdetails />,
        },
        {
          path: "meal-search",
          element: <SearchMeal />,
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
