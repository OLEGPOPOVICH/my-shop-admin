import { AxiosResponse } from "axios";
import { api } from "@common/http";
import { ResponseType } from "./types";
import {
  AuthResponseType,
  LoginRequestType,
  RegisterRequestType,
} from "./types/authTypes";

const AUTH_URL = {
  REGISTER: "register",
  LOGIN: "login",
  LOGOUT: "logout",
  REFRESH: "refresh",
};

type AxiosResponseType = AxiosResponse<ResponseType<AuthResponseType>>;

export class AuthService {
  static login(data: LoginRequestType): Promise<AxiosResponseType> {
    return api.post<ResponseType<AuthResponseType>>(`/${AUTH_URL.LOGIN}`, data);
  }

  static logout(): Promise<void> {
    return api.post(`/${AUTH_URL.LOGOUT}`);
  }

  static checkAuth(): Promise<AxiosResponseType> {
    return api.get<ResponseType<AuthResponseType>>(`${AUTH_URL.REFRESH}`, {
      withCredentials: true,
    });
  }

  static register(data: RegisterRequestType): Promise<AxiosResponseType> {
    return api.post<ResponseType<AuthResponseType>>(
      `/${AUTH_URL.REGISTER}`,
      data
    );
  }
}
