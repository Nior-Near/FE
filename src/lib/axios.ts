import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.niornear.store/",
  withCredentials: true,
});
