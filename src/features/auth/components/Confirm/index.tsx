import React from "react";
import { Info } from "@common/components/UI";

type ConfirmType = {
  login: () => void;
};

export const Confirm = ({ login }: ConfirmType) => (
  <>
    <div className="auth__confirm">
      <Info color="primary" fontSize="large" />
      <h2>Подтвердите свой аккаунт</h2>
      <small>
        На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта
      </small>
    </div>
    <div className="register__link">
      <small onClick={login}>Войти в аккаунт</small>
    </div>
  </>
);
