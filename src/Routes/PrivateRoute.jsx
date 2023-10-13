import PropTypes from "prop-types";
import { useContext } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log("Outside loading", loading);

  const location = useLocation();
  console.log("Location inside Private Route", location?.pathname);

  if (loading) {
    console.log("Inside loading", loading);
    return (
      <span className=" text-3xl text-center loading loading-spinner loading-lg"></span>
    );
  } else if (loading == undefined) {
    return (
      <span className=" text-3xl text-center loading loading-spinner loading-lg"></span>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
