import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const { data: advertises = [], refetch } = useQuery({
    queryKey: ["edvertise"],
    queryFn: () =>
      fetch(`http://localhost:5000/advertise`).then((res) => res.json()),
  });

  console.log(advertises);
  return (
    <div>
      <h1 className=" md:text-4xl mt-7 text-3xl text-center font-semibold text-purple-600 capitalize">
        Advertise Products
      </h1>

      <div className=" px-16 grid md:w-[90%] mx-auto gap-6 lg:grid-cols-2 grid-cols-1">
        {advertises?.map((advertise, index) => (
          <AdvertiseCard key={index} advertise={advertise} />
        ))}
      </div>
    </div>
  );
};

export default Advertise;
