import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import CatagoryDetailsCard from "./CatagoryDetailsCard";

const CatagoryDetails = () => {
  const catagoryDetails = useLoaderData();
  const [catagoryDetailInfo, setCatagoryDetailInfo] = useState(null);

  return (
    <>
      <div>
        <h1 className=" md:text-4xl mt-8 mb-6 text-3xl text-center font-semibold text-purple-800 capitalize">
          {catagoryDetails.length
            ? " All Products"
            : "There Are No Product Available !!"}
        </h1>
        <div className=" px-7 grid md:w-[90%] mx-auto gap-6 lg:grid-cols-2 grid-cols-1">
          {catagoryDetails?.map((catagoryDetail, index) => (
            <CatagoryDetailsCard
              key={index}
              catagoryDetail={catagoryDetail}
              setCatagoryDetailInfo={setCatagoryDetailInfo}
            />
          ))}
        </div>
        {catagoryDetailInfo && (
          <BuyNowModal
            catagoryDetailInfo={catagoryDetailInfo}
            setCatagoryDetailInfo={setCatagoryDetailInfo}
          />
        )}
      </div>
    </>
  );
};

export default CatagoryDetails;
