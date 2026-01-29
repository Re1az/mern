import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router";

export default function SearchMeal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [err, setErr] = useState();
  const [load, setLoad] = useState(false);
  const getData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`${baseUrl}/search.php`, {
        params: {
          s: search,
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

  return <div>SearchMeal</div>;
}
