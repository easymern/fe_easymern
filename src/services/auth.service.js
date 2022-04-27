import axios from "axios";

// Hit the API for the data.
// localhost:3001/api-v1/auth/login
const API_URL = "http://localhost:3001/api-v1/auth/";

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

      return response.data;
    });
}

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

export default {
  register,
  login,
  logout,
  getCurrentUser
};
