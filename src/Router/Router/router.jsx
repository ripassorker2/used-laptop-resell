import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CatagoryDetails from "../../Pages/Home/Catagory/CatagoryDetails/CatagoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Resister from "../../Pages/Resister/Resister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "catagory/:catagory",
        element: <CatagoryDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params?.catagory}`),
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
]);
