import axios from "axios";
import { AUTH_URL } from "../constants/api";

export const getToken = async () => {
  try {
    const res = await axios.get(`${AUTH_URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
