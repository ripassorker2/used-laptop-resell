import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";

const AllSeller = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: () =>
      fetch(`http://localhost:5000/allSellers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("user-token")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    const aggre = window.confirm("Are sure ?You want to delete this?");
    if (aggre) {
      fetch(`http://localhost:5000/buyerOrSeller/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `berarer ${localStorage.getItem("user-token")}`,
        },
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

  const handleVerified = (id) => {
    fetch(`http://localhost:5000/verify/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Seller verify succesfully ..!!");
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {" "}
      <div>
        <h1 className=" md:text-4xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
          {allSellers.length
            ? " All Sellers"
            : "There Are No Sellers Available !!"}
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
                  <th>Verificaton</th>
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
                    <td>
                      {" "}
                      {allSeller?.name}{" "}
                      {allSeller.verify && (
                        <TiTick
                          size={19}
                          className="text-blue-600 border-slate-400 border-2 rounded-full inline-block"
                        />
                      )}
                    </td>
                    <td>{allSeller?.email}</td>
                    <td>
                      {allSeller?.verify ? (
                        <>
                          <button className="btn btn-sm btn-disabled">
                            Verified
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleVerified(allSeller?._id)}
                            className="btn btn-sm btn-primary"
                          >
                            Verify
                          </button>
                        </>
                      )}
                    </td>
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
