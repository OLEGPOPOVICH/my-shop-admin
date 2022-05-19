import React, { ReactNode } from "react";
import { Img as ImgC } from "@components/UI/Img";

type ImgType = {
  src?: string;
  alt?: string;
  children?: ReactNode;
};

export const Img = ({ src, alt, children }: ImgType): JSX.Element => (
  <div className="blockinfo__img">
    {children || <ImgC src={src || "../images/no-img.png"} alt={alt} />}
  </div>
);
