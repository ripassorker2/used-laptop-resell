import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: () =>
      fetch(`http://localhost:5000/allBuyers`).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/buyer/${id}`, {
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
  };

  return (
    <div>
      <div>
        <h1 className=" md:text-5xl mt-7 text-3xl text-center font-bold text-purple-800 capitalize">
          My Orders
        </h1>
        {allBuyers && (
          <div className="overflow-x-auto mt-9">
            <table className="table w-[90%] m-auto">
              <thead>
                <tr>
                  <th>Si No</th>
                  <th>Buyer Image</th>
                  <th>Buyer Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              {allBuyers.map((allBuyer, index) => (
                <tbody key={index}>
                  <tr className="hover">
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={allBuyer?.image}
                        className="h-16 w-20 rounded-md"
                        alt=""
                      />
                    </td>
                    <td> {allBuyer?.name}</td>
                    <td>{allBuyer?.email}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(allBuyer?._id)}
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

export default AllBuyer;
