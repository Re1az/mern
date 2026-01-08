import { useState } from "react";
import { Button } from "./components/ui/button";
import { faker } from "@faker-js/faker";

export default function App() {
  const [data, setData] = useState([]);

  const handleData = () => {
    const newItems = faker.food.dish();

    setData((prev) => {
      return [prev, newItems];
    });
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => {
      return prev === 0 ? prev : prev - 1;
    });
  };

  return (
    <div className="p-5">
      {data.map((items, index) => {
        return (
          <ul key={index}>
            <li className="decoration-none">{items}</li>
          </ul>
        );
      })}

      <Button onClick={handleData} size="lg">
        hello
      </Button>

      <h1>
        {count}

        {count % 2 === 0 ? "even" : "odd"}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button className="p-10" onClick={handleDecrement}>
        Decremental
      </button>
    </div>
  );
}
