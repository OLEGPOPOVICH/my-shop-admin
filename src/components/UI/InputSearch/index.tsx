import React, { InputHTMLAttributes } from "react";
import { Input } from "@components/UI";
import { Icon } from "../Icon";

type InputSearchType = {
  label?: string;
  clearSearch?: () => void;
};

export const InputSearch = ({
  clearSearch,
  value,
  ...other
}: InputSearchType & InputHTMLAttributes<HTMLInputElement>) => (
  <Input
    value={value}
    {...other}
    elemRight={
      clearSearch && value ? (
        <div onClick={clearSearch}>
          <Icon>close</Icon>
        </div>
      ) : null
    }
  />
);
