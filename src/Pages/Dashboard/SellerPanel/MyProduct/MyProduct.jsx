import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import Loader from "../../../../utilities/Loader";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/product/${user?.email}`, {
        headers: {
          authorization: `berarer ${localStorage.getItem("user-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this?");
    if (aggre) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `berarer ${localStorage.getItem("user-token")}`,
        },
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

  const handleAdvertice = (advertiseId) => {
    fetch(`http://localhost:5000/advertiseProducts/${advertiseId}`, {
      method: "PUT",
      headers: {
        authorization: `berarer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added in advertise ...!!");
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className=" md:text-4xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
        {myProducts.length
          ? " My Products"
          : "There Are No Product Available !!"}
      </h1>
      {myProducts && (
        <div className="overflow-x-auto mt-9">
          <table className="table w-[90%] m-auto">
            <thead>
              <tr>
                <th>Si No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Advertise.</th>
                <th>Action</th>
              </tr>
            </thead>
            {myProducts.map((myProduct, index) => (
              <tbody key={index}>
                <tr className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={myProduct?.productImage}
                      className="h-16 w-20 border  rounded-lg"
                      alt=""
                    />
                  </td>
                  <td> {myProduct?.productName}</td>
                  <td> ${myProduct?.price}</td>
                  <td className="capitalize"> {myProduct.status}</td>
                  <td>
                    {myProduct?.status === "available" ? (
                      <button
                        disabled={myProduct?.advertise}
                        onClick={() => handleAdvertice(myProduct?._id)}
                        className="btn btn-sm"
                      >
                        Advertise
                      </button>
                    ) : (
                      <h3 className="">Already Sold</h3>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(myProduct?._id)}
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

export default MyProduct;
