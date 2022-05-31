import React from "react";
import { Themes } from "@common/components/types";
import { Progress } from "./Progress";
import { Pause } from "./Pause";
import { Play } from "./Play";
import { Duration } from "./Duration";
import { Wave } from "./Wave";
import { useAudioPlayer } from "./useAudioPlayer";

import "./AudioPlayer";

type AudioPlayerType = {
  audio?: string;
  theme?: keyof typeof Themes;
};

export const AudioPlayer = ({
  audio,
  theme = Themes.dark,
}: AudioPlayerType): JSX.Element => {
  const { audioRef, playing, duration, currentTime, setPlaying } =
    useAudioPlayer();

  return (
    <>
      {audio ? (
        <div className={`audio__player audio__player-${theme}`}>
          <audio ref={audioRef}>
            <source src={audio} type="audio/ogg" />
          </audio>
          <Progress currentTime={currentTime} duration={duration} />
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
          <Wave theme={theme} />
          <Duration
            duration={duration}
            currentTime={currentTime}
            playing={playing}
          />
        </div>
      ) : null}
    </>
  );
};

AudioPlayer.displayName = "AudioPlayer";
