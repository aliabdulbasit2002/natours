import { Suspense, useEffect, useState } from "react";
import TourCard from "../components/TourCard";
import { instance } from "../api/axios";
import Loader from "../components/Loader";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await instance("tours");
        setTours(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-3 ">
      <div className="grid grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default Home;
