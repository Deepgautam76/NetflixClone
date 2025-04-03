import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

const useNowPlayingMovies = () => {
  const [moviesdata, setMoviesdata] = useState([]);
  const dispatch = useDispatch();
  const option = API_OPTIONS;
  const YOUR_API_KEY = "67257140740e4a824b5ed5c676187952";
  const movieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${YOUR_API_KEY}&language=en-US`,
        option
      );
      const data = await response.json();
      setMoviesdata(data.results);
      //Set movies into moviesSlice
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    const movies = movieData();
    return () => movies;
  }, []);
  return moviesdata;
};

export default useNowPlayingMovies;
