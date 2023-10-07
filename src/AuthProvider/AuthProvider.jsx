import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/Firebase.config";
// import { useLoaderData } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [gymData, setGymData] = useState();
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    setLoading();
    fetch("/gymData.json")
      .then((res) => res.json())
      .then((data) => {
        setGymData(data);
      });
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createSignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("On auth state changed:", currentUser);
      setUser(currentUser);
      return () => {
        unSubscribe();
      };
    });
  }, [auth]);

  const authInfo = { user, gymData, createUser, createSignInUser, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
