import React, { ButtonHTMLAttributes } from "react";
import "./button";

export const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => <button {...props}>{props.children}</button>;
