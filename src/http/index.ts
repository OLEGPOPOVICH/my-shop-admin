/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { AuthService } from "@src/services/AuthService";
import axios, { AxiosRequestConfig } from "axios";
export const API_URL = "http://localhost:4000";
export const apiServer = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
});

apiServer.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
});

apiServer.interceptors.response.use(
  (config: AxiosRequestConfig) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response
      && error.response.status === 401
      && error.config
      && !error.config.isRetry
    ) {
      originalRequest.isRetry = true;

      try {
        const response = await AuthService.checkAuth();
        localStorage.setItem("token", response.data.data.accessToken);
        return apiServer.request(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }

    throw error;
  }
);

export const api = apiServer;
