import axios from "axios";
import authHeader from "./auth-header";

// Hit the API for the data.

const API_URL = "http://localhost:3001/api-v1/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "test/all");
}

const getUserBoard = () => {
  console.log("may need to change auth header to unnamed function");
  return axios.get(API_URL + "test/user", { headers: authHeader });
}

const getModeratorBoard = () => {
  return axios.get(API_URL + "test/mod", { headers: authHeader });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "test/admin", { headers: authHeader });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard
};
