import React from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({ catagory }) => {
  return (
    <div>
      <div className="shadow-lg w-[350px]">
        <div className=" border  px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <img src={catagory?.picture} alt="" className="rounded-lg border " />
          <h2 className="title-font font-medium text-3xl my-4 text-center text-gray-900 ">
            Brand : {catagory?.catagory}
          </h2>
          <Link to={`/catagory/${catagory?.catagory}`}>
            <button className="block w-full rounded bg-purple-600 px-12 py-3 text-center font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 ">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
