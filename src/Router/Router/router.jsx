import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyer from "../../Pages/Dashboard/AdminPanel/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AdminPanel/AllSeller/AllSeller";
import MyOrders from "../../Pages/Dashboard/BuyerPanel/MyOrders/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerPanel/AdProduct/AddProduct";
import MyProduct from "../../Pages/Dashboard/SellerPanel/MyProduct/MyProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CatagoryDetails from "../../Pages/Home/Catagory/CatagoryDetails/CatagoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Resister from "../../Pages/Resister/Resister";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "catagory/:catagory",
        element: (
          <PrivetRouter>
            <CatagoryDetails />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params?.catagory}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resister",
        element: <Resister />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRouter>
            <Dashboard />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <PrivetRouter>
            <MyOrders />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/addProducts",
        element: (
          <PrivetRouter>
            <AddProduct />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <PrivetRouter>
            <MyProduct />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <PrivetRouter>
            <AllBuyer />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <PrivetRouter>
            <AllSeller />
          </PrivetRouter>
        ),
      },
    ],
  },
]);
