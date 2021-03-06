import React from "react";
import { Img } from "@common/components/UI/Img";
import { Themes } from "@common/components/types";
import waveWhiteSvg from "@src/assets/img/waveWhite.svg";
import waveBlackSvg from "@src/assets/img/waveBlack.svg";

type WaveType = {
  theme?: keyof typeof Themes;
};

export const Wave = ({ theme }: WaveType) => (
  <div className="audio__wave">
    <Img src={theme !== "dark" ? waveBlackSvg : waveWhiteSvg} />
  </div>
);
