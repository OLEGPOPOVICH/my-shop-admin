import * as React from "react";

type ImgType = {
  src: string;
  alt?: string;
};

export const Img = ({ src, alt }: ImgType): JSX.Element => (
  <img src={src} alt={alt || ""} />
);
