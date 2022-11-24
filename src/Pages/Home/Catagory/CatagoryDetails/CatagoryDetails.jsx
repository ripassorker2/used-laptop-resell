import React from "react";
import { useLoaderData } from "react-router-dom";
import CatagoryDetailsCard from "./CatagoryDetailsCard";

const CatagoryDetails = () => {
  const catagoryDetails = useLoaderData();
  console.log(catagoryDetails);

  return (
    <div className="my-11 px-16">
      {catagoryDetails?.map((catagoryDetail, index) => (
        <CatagoryDetailsCard key={index} catagoryDetail={catagoryDetail} />
      ))}
    </div>
  );
};

export default CatagoryDetails;
