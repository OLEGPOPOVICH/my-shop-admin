import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { BadgeColorType, BadgePositionType } from "./types";
import { getCount } from "./helpers";
import "./Badge";

export type BadgeType = {
  count?: number;
  overflowCount?: number;
  dot?: boolean;
  className?: string;
  style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  color?: keyof typeof BadgeColorType;
  position?: keyof typeof BadgePositionType;
  bottom?: boolean;
  children?: ReactNode;
};

export const Badge = ({
  count,
  overflowCount,
  dot,
  className = "",
  style,
  color = BadgeColorType.gray,
  position = BadgePositionType.absolute,
  bottom,
  children,
}: BadgeType): JSX.Element => {
  const classBadge = classNames({
    "badge-count": count,
    "badge-dot": dot,
    "badge-bottom": bottom,
  });

  return (
    <div className={`badge ${className}`} style={style}>
      {children}
      <div className={`${classBadge} badge-${color} badge-${position}`}>
        {count ? <span>{getCount(count, overflowCount)}</span> : null}
      </div>
    </div>
  );
};
