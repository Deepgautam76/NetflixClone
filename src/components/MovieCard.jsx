import React from "react";
import { IMAGE_CDN_URL } from "../utils/Constant";

//Here is the only build the moviecard take the poster path and return the image
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-4 rounded-xl overflow-hidden">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
