import React from "react";

type ProgressType = {
  currentTime: number;
  duration: number;
};

export const Progress = ({ currentTime, duration }: ProgressType) => (
  <div
    className="audio_progress"
    style={{ width: `${(currentTime / duration) * 100}%` }}
  ></div>
);
