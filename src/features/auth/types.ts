export type UserRegisterType = {
  email: string;
  fullName: string;
  password: string;
};

export type UserLoginType = Omit<UserRegisterType, "fullName">;

export type ErrorType = null | string;

export type AuthUserType = {
  id: string;
  email: string;
  fullName: string;
  isActivated: boolean;
  avatar: string;
};
