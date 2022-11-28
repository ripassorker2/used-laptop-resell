import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdvertiseCard from "./AdvertiseCard";
import Loader from "../../../utilities/Loader";
import AdvertiseModal from "./AdvertiseModal";

const Advertise = () => {
  const [advertiseDetails, setAdvertiseDetails] = useState(null);
  const { data: advertises = [], isLoading } = useQuery({
    queryKey: ["edvertise"],
    queryFn: async () => {
      const res = await fetch(
        `https://resale-laptop-server.vercel.app/advertise`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {advertises.length && (
        <div>
          <h1 className=" md:text-5xl mt-7 text-3xl text-center font-semibold text-purple-600 capitalize">
            Advertise Products
          </h1>

          <div className=" px-16 grid md:w-[90%] mx-auto gap-6 lg:grid-cols-2 grid-cols-1">
            {advertises?.map((advertise, index) => (
              <AdvertiseCard
                key={index}
                advertise={advertise}
                setAdvertiseDetails={setAdvertiseDetails}
              />
            ))}
          </div>
          {advertiseDetails && (
            <AdvertiseModal
              advertiseDetails={advertiseDetails}
              setAdvertiseDetails={setAdvertiseDetails}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Advertise;
