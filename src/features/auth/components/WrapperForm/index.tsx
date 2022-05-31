import React, { FC } from "react";
import "./WrapperForm";

export const WrapperForm: FC<{ formHeader: string }> = ({
  formHeader,
  children,
}) => (
  <div className="wrap__form">
    <h1>{formHeader}</h1>
    {children}
  </div>
);
