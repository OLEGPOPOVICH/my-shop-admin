import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { AvatarColorType, AvatarSizeType, AvatarShapeType } from "./types";
import { getFirstLetterCapsFullname, generateBgColor } from "./helpers";
import { Img } from "../Img";

import "./Avatar";

type AvatarType = {
  fullname: string | null;
  avatar?: string | null;
  shape?: keyof typeof AvatarShapeType;
  size?: keyof typeof AvatarSizeType;
  style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  isGenerateBgColor?: boolean;
  color?: keyof typeof AvatarColorType;
};

export const Avatar = ({
  fullname,
  avatar,
  shape = AvatarShapeType.circle,
  size = AvatarSizeType.small,
  style,
  isGenerateBgColor = false,
  color = AvatarColorType.gray,
}: AvatarType): JSX.Element => (
  <div
    className={`avatar avatar-${shape} avatar-${size} avatar-${color}`}
    style={{
      ...style,
      ...generateBgColor(isGenerateBgColor, fullname),
    }}
  >
    {avatar ? <Img src={avatar} alt={fullname || ""} /> : null}
    {!avatar && fullname ? (
      <div>{getFirstLetterCapsFullname(fullname)}</div>
    ) : null}
  </div>
);
