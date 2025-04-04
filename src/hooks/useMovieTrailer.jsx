import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constant";

//Fetch trailer using movieId and dispatch to redux store
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideoData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const trailer = await response?.json();
    dispatch(addTrailerVideo(trailer?.results[0]));
  };
  useEffect(() => {
    const trailerCleanup = trailerVideoData();
    return () => trailerCleanup();
  }, []);
};

export default useMovieTrailer;
