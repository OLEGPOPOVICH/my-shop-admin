import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  authActions,
  authSelectors,
  LoginForm,
  UserLoginType,
} from "@features/auth";
import { authProcesses } from "@processes/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(authSelectors.getError());

  const handleGotToRegister = () => {
    dispatch(authActions.setError(null));
    history.push("/register");
  };

  const handleLogin = (data: UserLoginType) => {
    dispatch(authProcesses.login(data));
  };

  return (
    <LoginForm
      error={error}
      login={handleLogin}
      goToRegister={handleGotToRegister}
    />
  );
};

export default LoginPage;
