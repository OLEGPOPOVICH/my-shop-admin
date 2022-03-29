import React from "react";
import { IconButton } from "@components/UI";

type PlayType = {
  handleClick: () => void;
};

export const Play = ({ handleClick }: PlayType) => (
  <div className="audio__btn">
    <IconButton type="button" onClick={handleClick}>
      play_arrow
    </IconButton>
  </div>
);
