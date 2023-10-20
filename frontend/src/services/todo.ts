import axios from "axios";
import { GET_TODO_URL } from "../constants/api";
export const getTodos = async (token: string) => {
  try {
    const response = await axios.get(`${GET_TODO_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
