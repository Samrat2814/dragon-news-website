
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading/>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoutes;
