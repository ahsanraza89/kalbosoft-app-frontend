import axios from "axios";
// Axios instance with correct baseURL
export const apiConfig = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Interceptors for adding Authorization header
apiConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Helper functions for API calls
const GET = (url, params) => {
  return apiConfig.get(url, params ? { params } : undefined);
};

const POST = (url, data) => {
  return apiConfig.post(url, data);
};

const PUT = (url, data) => {
  return apiConfig.put(url, data);
};

const DELETE = (url) => {
  return apiConfig.delete(url);
};

const PATCH = (url, data) => {
  return apiConfig.patch(url, data);
};

// Exporting API functions and routes
export const API = {
  GET,
  POST,
  PUT,
  DELETE,
  PATCH,
};
