import { AuthUserType } from "@src/features/auth";

export type AuthResponseType = {
  accessToken: string;
  refreshToken: string;
  user: AuthUserType;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type RegisterRequestType = {
  email: string;
  fullName: string;
  password: string;
};
