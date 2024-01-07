
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingImg from '../assets/others/loader3.gif'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();

  if (loading) {
    return <img src={loadingImg} alt="loading" className="mx-auto mt-40" />
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
