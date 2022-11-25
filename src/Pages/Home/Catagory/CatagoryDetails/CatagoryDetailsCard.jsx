import React from "react";
// import BuyNowModal from "../BuyNowModal/BuyNowModal";

const CatagoryDetailsCard = ({ catagoryDetail, setCatagoryDetailInfo }) => {
  const {
    productName,
    description,
    productImage,
    resalePrice,
    price,
    purchesYear,
    useTime,
    location,
    date,
    time,
    sellerName,
    sellerImg,
  } = catagoryDetail;
  return (
    <div className="my-11 mb-16 border-2">
      <div className="max-w-2xl overflow-hidden bg-white shadow-xl rounded-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-72 border"
          src={productImage}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <h3 className="block mt-2 text-xl font-semibold text-purple-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 ">
              {productName}
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-base text-gray-700">Resale Price : </span>$
              {price}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-base">Orginal Price : </span>${resalePrice}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-base">Description :</span>{" "}
              {description.length > 150
                ? description.slice(0, 150) + "....."
                : description}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-base">Location : </span>
              {location}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-base">Used Time :</span> {useTime}
            </p>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-base">Purchase Date : </span>
              {purchesYear}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={sellerImg}
                  alt=""
                />
                <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                  {sellerName}
                </p>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {date} and Time : {time}
              </span>
            </div>
            <div className="flex justify-end items-end">
              <label
                htmlFor="buy-now-modal"
                onClick={() => setCatagoryDetailInfo(catagoryDetail)}
                className="inline-block text-center rounded-md  bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500"
              >
                Buy Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoryDetailsCard;
