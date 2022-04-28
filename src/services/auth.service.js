import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// Hit the API for the data.
// localhost:3001/api-v1/auth/login
const API_URL = "http://localhost:3001/api-v1/auth/";


const authContext = createContext();

// Provider component that wraps app and makes auth object
// available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child component to get the auth object
// and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
}

// Provider hook that creates auth object and handles state.
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
      username,
      email,
      password
    });
  };

  const login = (username, password) => {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then((response) => {
        if(response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        setUser(response.data);
        return response.data;
      })
      ;
  }

  const logout = () => {
    localStorage.removeItem("user");
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }

  // subscribe to user on mount.
  // Because this sets state in the callback it will cause any component
  // that uses this hook to re-render with the latest auth-object

  useEffect(() => {
    const unsubscribe = () => {
      JSON.parse(localStorage.getItem("user"))
    // // const unsubscribe = JSON.parse(localStorage.getItem("user")) => {
    //   if (user) {
    //     setUser(user.username);
    //   } else {
    //     setUser(false);
    //   }
    };
  // cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    register,
    login,
    logout,
    getCurrentUser
  }
}

export default ProvideAuth;
