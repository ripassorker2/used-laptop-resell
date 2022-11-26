import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: () =>
      fetch(`http://localhost:5000/allSellers`).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this?");
    if (aggre) {
      fetch(`http://localhost:5000/buyerOrSeller/${id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `berarer ${localStorage.getItem("user-token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Succesfully deleted this buyer !!");
            refetch();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      {" "}
      <div>
        <h1 className=" md:text-4xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
          All Sellers
        </h1>
        {allSellers && (
          <div className="overflow-x-auto mt-9">
            <table className="table w-[90%] m-auto">
              <thead>
                <tr>
                  <th>Si No</th>
                  <th>Seller Image</th>
                  <th>Seller Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              {allSellers.map((allSeller, index) => (
                <tbody key={index}>
                  <tr className="hover">
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={allSeller?.image}
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </td>
                    <td> {allSeller?.name}</td>
                    <td>{allSeller?.email}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(allSeller?._id)}
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
    </div>
  );
};

export default AllSeller;
