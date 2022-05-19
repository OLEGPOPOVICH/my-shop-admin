import React from "react";
import { Info } from "@components/UI";
import "./FieldMessage";

type fontSize =
  | "small"
  | "inherit"
  | "default"
  | "large"
  | "medium"
  | undefined;

type stateType = "success" | "warning" | "error" | "info";

type FieldMessageType = {
  state?: stateType;
  size?: fontSize;
  message: string;
};

export const FieldMessage = ({
  state = "info",
  size = "small",
  message,
}: FieldMessageType) => (
  <div className="field__message">
    {state === "info" ? <Info color="secondary" fontSize={size} /> : null}
    {state === "success" ? <Info color="primary" fontSize={size} /> : null}
    {state === "warning" ? <Info color="action" fontSize={size} /> : null}
    {state === "error" ? <Info color="error" fontSize={size} /> : null}
    {message}
  </div>
);
