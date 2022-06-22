import { useState, useEffect } from "react";
import Loading from "./comps/Loading";
import Tours from "./comps/Tours";
const url = "https://api.jsonstorage.net/v1/json/db8fa9a7-d029-420a-9208-fd7d0993e278/0e45d350-6e28-473a-89f0-d5ae97076c0b";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  },[])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <div className="container">
      <Tours />
    </div>
  )
}

export default App;
