import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyer from "../../Pages/Dashboard/AdminPanel/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AdminPanel/AllSeller/AllSeller";
import ReportedProduct from "../../Pages/Dashboard/AdminPanel/ReportedProduct/ReportedProduct";
import MyOrders from "../../Pages/Dashboard/BuyerPanel/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/BuyerPanel/Payment/Payment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerPanel/AdProduct/AddProduct";
import MyProduct from "../../Pages/Dashboard/SellerPanel/MyProduct/MyProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CatagoryDetails from "../../Pages/Home/Catagory/CatagoryDetails/CatagoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Resister from "../../Pages/Resister/Resister";
import AdminRouter from "../AdminRouter/AdminRouter";
import BuyerRouter from "../BuyerRouter/BuyerRouter";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import SellerRouter from "../SellerRouter/SellerRouter";

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
          fetch(
            `https://resale-laptop-server.vercel.app/products/${params?.catagory}`
          ),
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
            <BuyerRouter>
              <MyOrders />
            </BuyerRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/myOrders/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://resale-laptop-server.vercel.app/buyingPayment/${params.id}`
          ),
      },
      {
        path: "/dashboard/addProducts",
        element: (
          <PrivetRouter>
            <SellerRouter>
              <AddProduct />
            </SellerRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <PrivetRouter>
            <SellerRouter>
              <MyProduct />
            </SellerRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <PrivetRouter>
            <AdminRouter>
              <AllBuyer />
            </AdminRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <PrivetRouter>
            <AdminRouter>
              <AllSeller />
            </AdminRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/reported",
        element: (
          <PrivetRouter>
            <AdminRouter>
              <ReportedProduct />
            </AdminRouter>
          </PrivetRouter>
        ),
      },
    ],
  },
]);
