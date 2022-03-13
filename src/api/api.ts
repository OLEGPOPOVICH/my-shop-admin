import axios, { AxiosRequestConfig } from "axios";
export const SERVER_URL = "/server";
export const BASE_URL = "http://localhost:4200";
export const axiosLocal = axios.create({
  baseURL: `${BASE_URL}${SERVER_URL}`,
  timeout: 1000,
});

/* Локал или другие стенды */
const api = process.env.NODE_ENV === "development" ? axiosLocal : axiosLocal;

export default {
  get<R>(url: string, config?: AxiosRequestConfig) {
    return api.get<R>(url, config).then((data) => data.data);
  },
  post<R>(url: string, data: any, config?: AxiosRequestConfig) {
    return api.post<R>(url, data, config).then((data) => data.data);
  },
  patch<R>(url: string, data?: any, config?: AxiosRequestConfig) {
    return api.patch<R>(url, data, config).then((data) => data.data);
  },
  delete<R>(url: string, config?: AxiosRequestConfig) {
    return api.delete<R>(url, config).then((data) => data.data);
  },
};
