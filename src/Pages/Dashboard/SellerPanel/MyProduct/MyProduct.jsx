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
      const res = await fetch(`http://localhost:5000/product/${user?.email}`);
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
      <h1 className=" md:text-5xl mt-7 text-3xl text-center font-bold text-purple-800 capitalize">
        All Buyers
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
                  <td> Available</td>
                  <td>
                    {" "}
                    <button className="btn btn-sm">Advertise.</button>
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
