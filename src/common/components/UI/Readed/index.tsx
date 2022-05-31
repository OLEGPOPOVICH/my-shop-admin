import React from "react";
import classNames from "classnames";
import { Check } from "@common/components/UI";
import "./Readed";

export enum ReadedColorType {
  gray = "gray",
  blue = "blue",
  red = "red",
  green = "green",
}

type ReadedType = {
  isReaded?: boolean;
  color?: keyof typeof ReadedColorType;
};

export const Readed = ({
  isReaded,
  color = ReadedColorType.green,
}: ReadedType) => {
  const classReaded = classNames("readed", {
    "readed-complete": isReaded,
  });

  return (
    <span className={`${classReaded} readed-${color}`}>
      {isReaded ? <Check fontSize="small" /> : null}
      <Check fontSize="small" />
    </span>
  );
};
