import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

const useNowPlayingMovies = () => {
  const [moviesdata, setMoviesdata] = useState([]);
  const dispatch = useDispatch();
  const YOUR_API_KEY = "67257140740e4a824b5ed5c676187952";
  const movieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${YOUR_API_KEY}&language=en-US`,
        API_OPTIONS
      );
      const data = await response?.json();
      //Set movies into moviesSlice
      dispatch(addNowPlayingMovies(data?.results));
      setMoviesdata(data?.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);
  return moviesdata;
};

export default useNowPlayingMovies;
