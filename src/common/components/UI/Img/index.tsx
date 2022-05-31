import * as React from "react";

type ImgType = {
  src: string;
  className?: string;
  alt?: string;
};

export const Img = ({ src, className = "", alt }: ImgType): JSX.Element => (
  <img className={className} src={src} alt={alt || ""} />
);
