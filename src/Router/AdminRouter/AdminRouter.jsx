import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Loader from "../../utilities/Loader";
import useRole from "../../utilities/useRole";

const AdminRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isLoadingRole] = useRole(user?.email);
  const location = useLocation();

  if (loading || isLoadingRole) {
    return <Loader />;
  }
  if (user && isRole === "Admin") {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
