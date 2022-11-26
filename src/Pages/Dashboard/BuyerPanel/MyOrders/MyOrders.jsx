import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:5000/buying/${user?.email}`).then((res) =>
        res.json().then((data) => setMyOrders(data))
      );
    }
  }, [user?.email]);

  return (
    <div>
      <h1 className=" md:text-4xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
        {myOrders.length ? " My Orders" : "There Are No Orders Available !!"}
      </h1>
      {myOrders && (
        <div className="overflow-x-auto mt-9">
          <table className="table w-[90%] m-auto">
            <thead>
              <tr>
                <th>Si No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stutus</th>
              </tr>
            </thead>
            {myOrders.map((myOrder, index) => (
              <tbody key={index}>
                <tr className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={myOrder?.productPhoto}
                      className="h-16 w-20 rounded-md"
                      alt=""
                    />
                  </td>
                  <td> {myOrder?.productName}</td>
                  <td>${myOrder?.resalePrice}</td>
                  <td>
                    {myOrder?.paid ? (
                      <>
                        <button className="btn btn-sm">Paid</button>
                      </>
                    ) : (
                      <>
                        <Link
                          to={`/dashboard/myOrders/payment/${myOrder?._id}`}
                        >
                          <button className="btn btn-sm btn-primary">
                            Pay
                          </button>
                        </Link>
                      </>
                    )}
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

export default MyOrders;
