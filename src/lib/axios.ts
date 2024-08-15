import Axios from "axios";

export const axios = Axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://www.niornear.store/api"
      : "http://localhost:3000/api",
  withCredentials: true,
});
