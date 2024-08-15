import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://niornear-server.store/",
  withCredentials: true,
});
