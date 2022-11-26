import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../../../utilities/Loader";

const ReportedProduct = () => {
  const {
    data: reportedProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reportProduct`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this?");
    if (aggre) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Succesfully deleted this product !!");
            refetch();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className=" md:text-4xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
        Reported Products
        {reportedProducts.length
          ? " Reported Products"
          : "There Are No Reported Products Available !!"}
      </h1>
      {reportedProducts && (
        <div className="overflow-x-auto mt-9">
          <table className="table w-[90%] m-auto">
            <thead>
              <tr>
                <th>Si No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {reportedProducts.map((reported, index) => (
              <tbody key={index}>
                <tr className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={reported?.productImage}
                      className="h-16 w-20 border  rounded-lg"
                      alt=""
                    />
                  </td>
                  <td> {reported?.productName}</td>
                  <td className="text-red-600">{reported.report}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(reported?._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportedProduct;
