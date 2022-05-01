import axios from "axios";
import authHeader from "./auth-header";
// import {useHttpClient} from "../hooks/http-hook";

// Hit the API for the data.

const API_URL = "http://localhost:3001/api-v1/user/";


const getAdminStatus = () => {
  return axios.get(API_URL + "test/mod", { headers: authHeader })
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
  getAdminStatus,
  // getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard
};
