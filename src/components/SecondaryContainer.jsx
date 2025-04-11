import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  console.log("store now playing movies",movies?.nowPlayingMovies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      {/* 
      MovieList -Popular
       movieCars*n
       MoviesList -Top Rated

    */}
    </div>
  );
};

export default SecondaryContainer;
