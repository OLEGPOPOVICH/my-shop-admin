import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  authActions,
  authSelectors,
  RegisterForm,
  UserRegisterType,
} from "@features/auth";
import { authProcesses } from "@processes/auth";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isRegister = useSelector(authSelectors.getIsRegister());
  const error = useSelector(authSelectors.getError());

  const handleGotToLogin = () => {
    dispatch(authActions.setError(null));
    history.push("/login");
  };

  const handleLogin = (data: UserRegisterType) => {
    dispatch(authProcesses.register(data));
  };

  return (
    <RegisterForm
      isRegister={isRegister}
      error={error}
      registration={handleLogin}
      goToLogin={handleGotToLogin}
    />
  );
};

export default RegisterPage;
