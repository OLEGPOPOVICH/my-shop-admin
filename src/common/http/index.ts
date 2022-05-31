/* eslint-disable require-jsdoc */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ServerError, AuthError } from "@common/errors";
import { AuthService } from "@services";
export const BASE_URL = "http://localhost:4000";
export const apiServer = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

apiServer.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
});

apiServer.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => еrrorHandler(error)
);

let isRetry = true;

/**
 * Обработчик ошибок сервера
 * @param {AxiosError} error Объект ошибки
 * @returns {never} .
 */
function еrrorHandler(error: AxiosError): Promise<AxiosResponse<any, any>> {
  if (
    error.response?.status === 401
    && isRetry
  ) {
    isRetry = false;
    return retryRequest(error.response.config);
  }

  if (
    error.response?.status === 401
    && !isRetry
  ) {
    throw new AuthError(error);
  }

  if (!error.response) {
    throw new ServerError(error);
  }

  throw error;
}

/**
 * Повтор запроса
 * @param {AxiosRequestConfig} originalRequest конфиг запроса
 * @returns {Promise} .
 */
async function retryRequest(originalRequest: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
  try {
    const response = await AuthService.checkAuth();
    localStorage.setItem("token", response.data.data.accessToken);
    return apiServer.request(originalRequest);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const api = apiServer;
