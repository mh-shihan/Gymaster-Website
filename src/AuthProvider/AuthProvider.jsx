import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);
const [user, setUser] = useState();

const authInfo = { user };

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
