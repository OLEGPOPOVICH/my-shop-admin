import React, { InputHTMLAttributes } from "react";
import "./Input";

type InputType = {
  label?: string;
  message?: string;
  elemRight?: string;
};

export const Input = ({
  label,
  message,
  elemRight,
  ...other
}: InputType & InputHTMLAttributes<HTMLInputElement>): JSX.Element => (
  <div className="input__box">
    {label ? <div className="input__label">{label}</div> : null}
    <div className="input__wrap">
      <input className="input" {...other}></input>
      {elemRight ? <div className="input__right">{elemRight}</div> : null}
    </div>
    {message ? <div className="input__message">{message}</div> : null}
  </div>
);
