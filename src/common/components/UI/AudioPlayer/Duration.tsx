import React from "react";
import { getAudioDuration } from "./helpers";

type DurationType = {
  duration: number;
  currentTime: number;
  playing: boolean;
};

export const Duration = ({ duration, currentTime, playing }: DurationType) => (
  <div className="audio_duration">
    {getAudioDuration(playing ? currentTime : duration)}
  </div>
);
