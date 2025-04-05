import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute w-screen aspect-video pt-36 px-12  text-white bg-gradient-to-r from-black opacity-80">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-white text-black p-3 px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-80">
          Play
        </button>
        <button className=" ml-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
