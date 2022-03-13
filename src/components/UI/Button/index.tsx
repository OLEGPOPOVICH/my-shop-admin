import React, { ButtonHTMLAttributes } from "react";
import "./Button";

export const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => <button {...props}>{props.children}</button>;
