import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input, FieldMessage } from "@src/components/UI";
import { Confirm } from "../Confirm";
import { registerActionThunk } from "../actionsThunk";
import { errorSelectors, isRegisterSelectors } from "../selectors";
import { setIsRegister } from "../actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Поле обязательно для заполнения")
    .email("Введите электронную почту"),
  fullName: Yup.string()
    .required("Поле обязательно для заполнения")
    .min(8, "Поле ФИО должно быть не меньше 8 символов"),
  password: Yup.string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[\dA-Za-z]+$/,
      "Пароль некорректный, пароль может содержать только латинские буквы и цифры!"
    )
    .min(8, "Пароль должен быть не меньше 8 символов")
    .max(15, "Пароль должен быть не больше 15 символов"),
});

type RegisterFormType = {
  goToLogin: () => void;
};

export const RegisterForm = ({ goToLogin }: RegisterFormType) => {
  const dispatch = useDispatch();
  const error = useSelector(errorSelectors());
  const isRegister = useSelector(isRegisterSelectors());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any): void => {
    dispatch(registerActionThunk(data));
  };

  useEffect(() => {
    dispatch(setIsRegister(false));
  }, []);

  return (
    <div className="wrap__form">
      <h1>Регистрация</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {!isRegister ? (
          <>
            <Input
              {...register("email")}
              name="email"
              placeholder="Эл. почта"
              error={errors.email}
            />
            <Input
              {...register("fullName")}
              name="fullName"
              placeholder="ФИО"
              error={errors.fullName}
            />
            <Input
              {...register("password")}
              name="password"
              placeholder="Пароль"
              error={errors.password}
            />
            {error && <FieldMessage message={error} />}
            <Button className="primary" type="submit">
              Зарегистрироваться
            </Button>
            <div className="register__link">
              <small onClick={goToLogin}>Войти в аккаунт</small>
            </div>
          </>
        ) : (
          <Confirm login={goToLogin} />
        )}
      </form>
    </div>
  );
};
