/* eslint-disable no-console */
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FieldMessage, Input } from "@common/components/UI";
import { WrapperForm } from "../WrapperForm";
import { ErrorType, UserLoginType } from "../../types";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Поле обязательно для заполнения")
    .email("Введите электронную почту"),
  password: Yup.string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[\dA-Za-z]+$/,
      "Пароль некорректный, пароль может содержать только латинские буквы и цифры!"
    )
    .min(8, "Пароль должен быть не меньше 8 символов")
    .max(15, "Пароль должен быть не больше 15 символов"),
});

type LoginFormType = {
  error: ErrorType;
  login: (data: UserLoginType) => void;
  goToRegister: () => void;
};

export const LoginForm = ({ error, login, goToRegister }: LoginFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    login(data);
  };

  return (
    <WrapperForm formHeader="Войти в аккаунт">
      <small>Пожалуйста войдите в свой аккаунт</small>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          name="email"
          placeholder="Эл. почта"
          error={errors.email}
        />
        <Input
          {...register("password")}
          name="password"
          placeholder="Пароль"
          error={errors.password}
        />
        {error && <FieldMessage message={error} />}
        <Button className="primary" type="submit">
          войти в аккаунт
        </Button>
        <div className="register__link">
          <small onClick={goToRegister}>Зарегистрироваться</small>
        </div>
      </form>
    </WrapperForm>
  );
};
