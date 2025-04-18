import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import {addUpcomingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

const useUpcomingMovies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const dispatch = useDispatch();
  const YOUR_API_KEY = import.meta.env.VITE_YOUR_API_KEY;
  const movieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${YOUR_API_KEY}&language=en-US`,
        API_OPTIONS
      );
      const data = await response?.json();
      //Set movies into moviesSlice
      dispatch(addUpcomingMovies(data?.results));
      setMoviesData(data?.results);
    } catch (error) {
      console.error("Error fetching movie data of trending movies:", error);
    }
  };

  useEffect(() => {
    const clenup = movieData();
    return () => {
      clenup;
    };
  }, []);
  return moviesData;
};

export default useUpcomingMovies;
