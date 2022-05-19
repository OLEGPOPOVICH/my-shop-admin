import React from "react";
import { IconButton } from "@components/UI";

type PauseType = {
  handleClick: () => void;
};

export const Pause = ({ handleClick }: PauseType) => (
  <div className="audio__btn">
    <IconButton type="button" onClick={handleClick}>
      pause
    </IconButton>
  </div>
);
