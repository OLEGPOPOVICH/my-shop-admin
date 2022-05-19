import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setError } from "../actions";

import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";

import "./Auth";

export const Auth = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);

  const handleToggleForm = () => {
    dispatch(setError(null));
    setLogin(!login);
  };

  return (
    <>
      {login ? (
        <LoginForm goToRegister={handleToggleForm} />
      ) : (
        <RegisterForm goToLogin={handleToggleForm} />
      )}
    </>
  );
};
