import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.niornear.store/",
  withCredentials: true,
});

axios.interceptors.request.use((config) => {
  const token = window?.localStorage.getItem("accessToken");

  if (!!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
