import { baseUrl } from "@/config/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Mealdetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`${baseUrl}/lookup.php`, {
        params: {
          i: id,
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

  console.log(data);
  return <div>Mealdetails</div>;
}
