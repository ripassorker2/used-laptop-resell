import React from "react";
import BuyNowModal from "../BuyNowModal/BuyNowModal";

const CatagoryDetailsCard = ({ catagoryDetail }) => {
  const {
    picture,
    resalePrice,
    orginalPrice,
    catagory,
    location,
    date,
    sellerName,
    name,
    sellerImg,
  } = catagoryDetail;
  return (
    <div className="my-11 mb-16">
      <div className="flex flex-col-reverse lg:flex-row w-full bg-white dark:bg-gray-800 shadow rounded border">
        <div className="w-full lg:w-1/2">
          <div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
            <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
              <h4 className="text-base text-indigo-700 dark:text-indigo-600 tracking-normal leading-4">
                12:00pm
              </h4>
              <h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">
                23 December, Sunday
              </h4>
            </div>
            <h2 className="text-purple-600 dark:text-gray-100  mt-3 tracking-normal text-lg lg:text-2xl font-semibold">
              {name}
            </h2>
            <h2 className="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-base  font-semibold">
              Brand : {catagory}
            </h2>
            <h2 className="text-gray-800 dark:text-gray-100  tracking-normal text-base  font-semibold">
              Orginal price : ${orginalPrice}
            </h2>

            <h2 className="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-base  font-semibold">
              Resale price : ${resalePrice}
            </h2>
            <p className="mb-6 text-base font-semibold text-gray-600 dark:text-gray-400  tracking-normal w-11/12 lg:w-9/12">
              Location : {location}
            </p>
            <div className="flex  items-start ">
              <img src={sellerImg} alt="" className="h-11 w-11 rounded-full" />

              <div className="mt-4  ">
                <p className="text-gray-600 dark:text-gray-400 ml-4 text-base tracking-normal font-semibold text-center">
                  {sellerName}
                </p>
              </div>
            </div>
          </div>
          <div className=" border-t border-gray-300">
            <label
              htmlFor="buy-now-modal"
              className="inline-block text-center w-full bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500"
            >
              Buy Now
            </label>
            {/* <button className="inline-block w-full bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500">
              Buy Now
            </button> */}
          </div>
        </div>
        <div className="relative w-full border-l h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
          <img
            className="w-full h-full absolute bg-cover inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
            src={picture}
            alt="banner"
          />
        </div>

        <style>
          {` .checkbox:checked {
                                    border: none;
                                }
                                .checkbox:checked + .check-icon {
                                    display: flex;
                                }`}
        </style>
      </div>
      <BuyNowModal catagoryDetail={catagoryDetail} />
    </div>
  );
};

export default CatagoryDetailsCard;
