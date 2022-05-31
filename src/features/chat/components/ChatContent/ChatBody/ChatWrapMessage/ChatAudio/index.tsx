import React from "react";
import classNames from "classnames";
import { AudioPlayer } from "@common/components/UI";
import { Themes } from "@common/components/types";
import "./ChatAudio";

export type AudioType = string | null;

type ChatAudioType = {
  audio: AudioType;
  theme?: keyof typeof Themes;
  revert?: boolean;
};

export const ChatAudio = ({
  audio,
  theme,
  revert,
}: ChatAudioType): JSX.Element => (
  <>
    {audio ? (
      <div
        className={classNames(`chat__audio`, {
          "chat__audio-revert": revert,
        })}
      >
        <AudioPlayer audio={audio} theme={theme} />
      </div>
    ) : null}
  </>
);
