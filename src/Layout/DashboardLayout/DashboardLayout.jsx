import React, { useState, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { BsCartCheckFill, BsChevronLeft } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { RiProductHuntLine } from "react-icons/ri";
import { FaSellsy } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const { user } = useContext(AuthContext);
  const [isRole, setRole] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data?.role);
        });
    }
  }, [user?.email]);

  return (
    <div>
      <Navbar />

      <div className="flex bg-slate-50">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300 border`}
        >
          <BsChevronLeft
            className={`absolute cursor-pointer text-2xl text-gray-800 -right-3 top-9 w-6 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="">
            <h1
              className={`text-purple-600  md:text-3xl origin-left font-semibold text-2xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </div>
          <ul className="pt-6">
            {/* .................buyer........................  */}

            {isRole === "Buyer" && (
              <Link to={"/dashboard/myOrders"}>
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 } `}
                >
                  <BsCartCheckFill size={22} />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    My Orders
                  </span>
                </li>
              </Link>
            )}

            {/* ..................seller.................  */}

            {isRole === "Seller" && (
              <>
                <Link to={"/dashboard/myProduct"}>
                  {" "}
                  <li
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 } `}
                  >
                    <RiProductHuntLine size={22} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-lg font-semibold`}
                    >
                      My Products
                    </span>
                  </li>
                </Link>
                <Link to={"/dashboard/addProducts"}>
                  {" "}
                  <li
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 } `}
                  >
                    <CgAddR size={22} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-lg font-semibold`}
                    >
                      Add Product
                    </span>
                  </li>
                </Link>
              </>
            )}

            {/* ...........Admin...................  */}

            {isRole === "Admin" && (
              <>
                <Link to={"/dashboard/allBuyers"}>
                  <li
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 } `}
                  >
                    <FaSellsy size={22} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-lg font-semibold`}
                    >
                      All Buyers
                    </span>
                  </li>
                </Link>
                <Link to={"/dashboard/allSellers"}>
                  <li
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 } `}
                  >
                    <GiBuyCard size={22} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-lg font-semibold`}
                    >
                      All Sellers
                    </span>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
        {/* page content  */}
        <div className=" flex-1 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
