import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    "Content-type": "application/json"
  }
});