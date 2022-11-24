import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../utilities/Loader";
import CatagoryCard from "./CatagoryCard";

const Catagory = () => {
  const { data: catagories = [], isLoading } = useQuery({
    queryKey: ["catagories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/catagory");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  console.log(catagories);
  return (
    <div className="my-20">
      <h1 className="text-center pb-4 border-b-2 text-purple-600 font-bold md:text-5xl text-3xl">
        Our Catagory
      </h1>

      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[85%] m-auto gap-11">
        {catagories?.map((catagory, indexd) => (
          <CatagoryCard key={indexd} catagory={catagory} />
        ))}
      </div>
    </div>
  );
};

export default Catagory;