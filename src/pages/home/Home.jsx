import { Input } from "@/components/ui/input.jsx";
import CategoryMeal from "../Meals/CategoryMeal.jsx";
import { useNavigate } from "react-router";
import { useActionState } from "react";

export default function Home() {
  const nav = useNavigate();
  const handleForm = (prevstate, formData) => {
    const search = formData.get("search");
    if (!search) return;
    nav(`/meal-search?s=${search}`);
  };

  const [state, action] = useActionState(handleForm, null);
  return (
    <div className="text-white px-14">
      <div className="flex items-center">
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
        <div className="text-center space-y-4">
          <h1 className="text-4xl ">Welcome to TheMealDB</h1>
          <p>
            Welcome to TheMealDB: An open, crowd-sourced database of recipes
            from around the world. We offer a free recipe API for anyone wanting
            to use it, with additional premium features if required.
          </p>
        </div>
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
      </div>
      <hr />
      <form action={action} className="max-w-sm mt-5 mb-5 m-auto text-white">
        <Input placeholder="Search for meal" name="search" />
      </form>
      <hr />

      <CategoryMeal />
    </div>
  );
}
