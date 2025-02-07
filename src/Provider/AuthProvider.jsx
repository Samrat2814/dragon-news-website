/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  // Function to create a new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
