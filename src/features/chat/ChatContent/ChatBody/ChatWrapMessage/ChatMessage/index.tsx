import React from "react";
import classNames from "classnames";
import { Typing } from "@components/UI";
import { Themes } from "@src/components/types";

import "./ChatMessage";

export const ChatMessage = ({
  message,
  theme = Themes.light,
  revert,
  isTyping,
}: any): JSX.Element => (
  <>
    {isTyping || message ? (
      <div
        className={classNames(`chat__message chat__message-${theme}`, {
          "chat__message-revert": revert,
        })}
      >
        <div className="chat__message__text">
          {isTyping ? <Typing /> : message}
        </div>
      </div>
    ) : null}
  </>
);
