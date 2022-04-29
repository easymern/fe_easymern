import axios from "axios";

const API_URL = "http://localhost:3001/api-v1/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      return response.data;
      // if (response.data.accessToken) {
      //   console.log(response.data);
      //   localStorage.setItem("user", JSON.stringify(response.data));
      // }
      //
      // return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
