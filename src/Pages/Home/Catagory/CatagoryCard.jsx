import React from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({ catagory }) => {
  return (
    <div>
      <div className="group relative shadow-lg border cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={catagory?.picture}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-4xl font-bold text-white">
            Brand : {catagory?.catagory}
          </h1>
          <Link to={`/catagory/${catagory?.catagory}`}>
            <button className="rounded-lg bg-purple-900 py-3 px-5 font-com mt-5 capitalize text-white shadow shadow-black/60">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
