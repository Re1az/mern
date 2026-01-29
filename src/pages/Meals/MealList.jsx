import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { baseUrl } from "../../config/api.js";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function MealList() {
  const { category } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`${baseUrl}/filter.php`, {
        params: {
          c: category,
        },
      });
      setLoad(false);
      setData(response.data.meals);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) return <h1 className="text-white">Loading...</h1>;
  if (err) return <h1 className="text-red-300">{err}</h1>;

  return (
    <div className="text-white grid grid-cols-4 gap-10 ">
      {data.map((meal) => {
        return (
          <Card
            key={meal.idMeal}
            className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src={meal.strMealThumb}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover "
            />
            <CardHeader>
              <CardTitle>{meal.strMeal}</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => nav(`/meal-details/${meal.idMeal}`)}
                className="w-full"
              >
                Details
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
