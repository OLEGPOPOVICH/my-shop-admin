import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import { Readed } from "@common/components/UI";
import { Themes } from "@common/components/types";
import { MessageType } from "../../../../types";
import { ChatMessage } from "./ChatMessage";
import { ChatAudio } from "./ChatAudio";
import { ChatAttachments } from "./ChatAttachments";
import "./ChatWrapMessage";

type ChatWrapMessageType = {
  message: MessageType;
  isMe: boolean;
};

export const ChatWrapMessage = ({
  message,
  isMe,
}: ChatWrapMessageType): JSX.Element => (
  <>
    <ChatMessage
      isTyping={false}
      message={message.message}
      revert={isMe}
      theme={isMe ? Themes.light : Themes.dark}
    />
    <ChatAudio
      audio={null}
      revert={isMe}
      theme={isMe ? Themes.light : Themes.dark}
    />

    <div className="chat__message__other">
      {message ? (
        <>
          <ChatAttachments attachments={null} revert={isMe} />
          <div className="chat__message__state">
            {message.dataCreation && (
              <span className="chat_date">
                {formatDistanceToNow(new Date(message.dataCreation), {
                  addSuffix: true,
                  locale: ruLocale,
                })}
              </span>
            )}
            {isMe ? <Readed isReaded={message.isReaded} /> : null}
          </div>
        </>
      ) : null}
    </div>
  </>
);
