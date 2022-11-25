import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import CatagoryDetailsCard from "./CatagoryDetailsCard";

const CatagoryDetails = () => {
  const catagoryDetails = useLoaderData();
  const [catagoryDetailInfo, setCatagoryDetailInfo] = useState(null);

  return (
    <div>
      <h1 class=" md:text-5xl mt-8 text-3xl text-center font-bold text-purple-800 capitalize">
        All Products
      </h1>
      <div className=" px-16 grid md:w-[90%] mx-auto gap-6 lg:grid-cols-2 grid-cols-1">
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
  );
};

export default CatagoryDetails;
