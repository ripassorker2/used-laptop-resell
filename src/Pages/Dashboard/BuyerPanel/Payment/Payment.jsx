import React from "react";
import { useLoaderData } from "react-router-dom";
import CheekOutFrom from "./CheekOutFrom";

const Payment = () => {
  const productData = useLoaderData();

  return (
    <div>
      <h2 className="md:text-4xl text-3xl font-semibold text-center text-purple-600 mt-9 mb-6">
        Pay Here
      </h2>
      <p className="text-center text-xl ">
        Please pay{" "}
        <span className="font-semibold"> ${productData?.resalePrice}</span> for{" "}
        {""}
        <span className="font-semibold"> {productData?.productName} </span>{" "}
        product !!
      </p>

      <div className="justify-center rounded-lg text-center mt-6 bg-gray-400 border  w-[500px] p-8 m-auto">
        <CheekOutFrom productData={productData} />
      </div>
    </div>
  );
};

export default Payment;
