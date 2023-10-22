import axios from "axios";
import { AUTH_URL } from "@constants/api";

export const getToken = async () => {
  try {
    const res = await axios.get(`${AUTH_URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const verifyToken = async (token: string | null) => {
  try {
    const res = await axios.post(`${AUTH_URL}/verify`, { token });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
