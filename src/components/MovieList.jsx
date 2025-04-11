import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mx-4 p-2">{title}</h1>
        <div className="flex">
          {movies !== null
            ? movies.map((movie) => (
                <MovieCard key={movie?.id} poster={movie?.poster_path} />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
