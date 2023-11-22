import { useEffect, useState } from "react";
import axiosInstance from "../Utils/axios";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/constant";

const Browse = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const getNowPlayingMovies = async () => {
    try {
      const res = await axiosInstance.get(`/3/movie/now_playing`, API_OPTIONS);
      if (res.data) setData(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Header />
      Browse
    </>
  );
};

export default Browse;
