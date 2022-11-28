import React, { useEffect, useState } from "react";
import CatagoryCard from "./CatagoryCard";
import axios from "axios";

const Catagory = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    axios
      .get("https://resale-laptop-server.vercel.app/catagory")
      .then((res) => setCatagories(res.data));
  }, []);

  return (
    <div className="my-14">
      <h1 className="text-center pb-4  text-purple-600 font-semibold md:text-5xl text-3xl">
        Our Catagory
      </h1>

      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] m-auto gap-11">
        {catagories?.map((catagory, indexd) => (
          <CatagoryCard key={indexd} catagory={catagory} />
        ))}
      </div>
    </div>
  );
};

export default Catagory;
