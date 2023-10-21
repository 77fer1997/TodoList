import axios, { InternalAxiosRequestConfig } from "axios";
import { verifyToken } from "../services/auth";
import { AlertError } from "../components/Alerts";
export const AxiosInterceptor = () => {
  const updateHeader = async (request: InternalAxiosRequestConfig) => {
    if (request.url?.includes("authentication")) return request;

    if (request.url?.includes("todo")) {
      const token = window.localStorage.getItem("token");
      request.headers["Authorization"] = `Bearer ${token}`;
      const tokenValidate = await verifyToken(token);
      if (!tokenValidate) {
        AlertError(() => {
          window.location.reload();
        });
      }
      return request;
    }
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeader(request);
  });
};
