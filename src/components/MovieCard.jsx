import React from "react";
import { IMAGE_CDN_URL } from "../utils/Constant";

const MovieCard = ({ poster_path }) => {
  console.log("from poster", poster_path);
  return (
    <div>
      <img src={IMAGE_CDN_URL + poster_path} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
