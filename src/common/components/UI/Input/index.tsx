import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Info } from "@common/components/UI";
import "./Input";

type ErrorType = {
  message: string;
};

type InputType = {
  label?: string;
  error?: ErrorType;
  elemRight?: ReactNode | string;
};

export const Input = forwardRef<
  HTMLInputElement,
  InputType & InputHTMLAttributes<HTMLInputElement>
>(({ label, elemRight, error, ...other }, ref) => (
  <div className="input__box">
    {label ? <div className="input__label">{label}</div> : null}
    <div className="input__wrap">
      <input ref={ref} className="input" {...other}></input>
      {elemRight ? <div className="input__right">{elemRight}</div> : null}
    </div>
    {error ? (
      <div className="input__message">
        <Info color="error" fontSize="small" /> {error.message}
      </div>
    ) : null}
  </div>
));
