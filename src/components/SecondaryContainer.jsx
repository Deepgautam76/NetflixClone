import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // Here make the movieList more dynamic
  return (
    <div className="-mt-50 relative z-50">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Up-Comming"} movies={movies?.upcomingMovies} />
      <MovieList title={"Trending"} movies={movies?.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
    </div>
  );
};

export default SecondaryContainer;
