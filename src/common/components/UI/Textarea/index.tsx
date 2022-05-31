import React, { ChangeEvent, TextareaHTMLAttributes } from "react";
import "./Textarea";

type TextareaType = {
  label?: string;
  message?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({
  label,
  message,
  ...other
}: TextareaType & TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element => (
  <div className="textarea__box">
    {label ? <div className="textarea__label">{label}</div> : null}
    <textarea {...other}></textarea>
    {message ? <div className="textarea__message">{message}</div> : null}
  </div>
);
