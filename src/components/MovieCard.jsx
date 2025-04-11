import React from "react";
import { IMAGE_CDN_URL } from "../utils/Constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="mx-2">
      <img className="w-48" src={IMAGE_CDN_URL + poster} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
