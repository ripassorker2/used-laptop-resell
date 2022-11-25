import React, { useState, useEffect, useContext } from "react";
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
      <h1 className=" md:text-5xl mt-7 text-3xl text-center font-bold text-purple-800 capitalize">
        My Orders
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
                    <button className="btn btn-sm btn-primary">Pay</button>
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
