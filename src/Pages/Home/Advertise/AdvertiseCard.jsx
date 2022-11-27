import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AdvertiseCard = ({ advertise, setAdvertiseDetails }) => {
  const { user } = useContext(AuthContext);
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
  } = advertise;

  const handleReportd = (id) => {
    const agree = window.confirm(
      "Are you sure ? You want to report this product?"
    );
    if (agree) {
      fetch(`http://localhost:5000/report/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Reported succesfully..!");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div className="my-10  border-2">
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
                <span className="text-base text-gray-700">Resale Price : </span>
                ${resalePrice}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-base">Orginal Price : </span>${price}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-base">Description :</span>{" "}
                {description.length > 150
                  ? description.slice(0, 140) + "....."
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
                    className="object-cover h-10 w-10 rounded-full"
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
                {user?.uid && (
                  <button
                    onClick={() => handleReportd(advertise?._id)}
                    className="btn btn-primary btn-sm mr-4"
                  >
                    Report to Admin
                  </button>
                )}
                {user?.uid ? (
                  <label
                    htmlFor="advertise-modal"
                    onClick={() => setAdvertiseDetails(advertise)}
                    className="inline-block text-center rounded-md  bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500"
                  >
                    Booking Now
                  </label>
                ) : (
                  <h3 className="text-lg font-semibold text-purple-600">
                    For booking this product you must login frist .{" "}
                    <Link to="/login" className="underline">
                      Login now
                    </Link>
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
