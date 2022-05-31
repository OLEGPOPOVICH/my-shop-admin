/* eslint-disable no-console */
import React, { ChangeEvent, useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker, EmojiData } from "emoji-mart";
import Upload from "rc-upload";
import { IconButton, Textarea } from "@common/components/UI";

import "./ChatFooter";
import { MessageType } from "../../../types";

type ChatFooterType = {
  sendMessage: (
    message: Pick<MessageType, "id" | "dataCreation" | "message">
  ) => void;
};

export const ChatFooter = ({ sendMessage }: ChatFooterType) => {
  const [isEmoji, setIsEmoji] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const openEmoji = () => setIsEmoji(!isEmoji);

  const handleEmojiClcik = (emoji: EmojiData) => {
    if ("native" in emoji) {
      setCurrentMessage(`${currentMessage}${emoji.native} `);
    }
  };

  const handleSendMessage = () => {
    if (currentMessage) {
      const newMessage = {
        id: `${Date.now()}`,
        dataCreation: `${new Date()}`,
        message: currentMessage,
      };

      sendMessage(newMessage);
      setIsEmoji(false);
      setCurrentMessage("");
    }
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentMessage(event.target.value);
  };

  return (
    <div className="chat__footer">
      <div>
        <IconButton className="chat__btn__emoji" onClick={openEmoji}>
          emoji_emotions
        </IconButton>
        <Textarea value={currentMessage} onChange={handleMessageChange} />
        <div className="chat__actions">
          <IconButton onClick={handleSendMessage}>send</IconButton>
          <Upload
            action="/upload"
            multiple={true}
            multipart={true}
            onStart={(file) => {
              console.log("onStart", file);
            }}
            onSuccess={(file) => {
              console.log("onSuccess", file.name);
            }}
            onProgress={(file) => {
              console.log("onProgress", file);
            }}
            onError={(file) => {
              console.log("onError", file.name);
            }}
          >
            <IconButton>add_a_photo</IconButton>
          </Upload>
          <IconButton>mic</IconButton>
        </div>
      </div>
      {isEmoji ? (
        <div className="chat__box__emoji">
          <Picker set="apple" theme="dark" onClick={handleEmojiClcik} />
        </div>
      ) : null}
    </div>
  );
};
