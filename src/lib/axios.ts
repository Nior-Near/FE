import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://test.niornear.store/",
  withCredentials: true,
});
