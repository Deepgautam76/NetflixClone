import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold py-1">{title}</h1>
        <span className="text-2xl font-bold py-1 cursor-pointer">{">"}</span>
      </div>
      <div className="flex overflow-x-scroll scroll-smooth whitespace-nowrap">
        <div className="flex">
          {movies === null
            ? "Loading..."
            : movies?.map((movie) => (
                <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
