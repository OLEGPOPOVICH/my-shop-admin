import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
  Avatar,
  AvatarShapeType,
  AvatarColorType,
  Badge,
  BadgeColorType,
  Blockinfo,
} from "@common/components/UI";
import { MessageType } from "../../../../types";
import { ChatWrapMessage } from "../ChatWrapMessage";
import { ChatEmpty } from "../../ChatEmpty";
import { ChatUnreadMessageInfo } from "../ChatUnreadMessageInfo";
import "./ChatMessages";

type ChatMessagesType = {
  messages: MessageType[];
  currentUserId?: string;
  connectedUserIds: string[];
};

export const ChatMessages = ({
  messages,
  currentUserId,
  connectedUserIds,
}: ChatMessagesType) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [firstUnreadMessage, setFirstUnreadMessage] =
    useState<MessageType | null>(null);
  const [totalUnreadMessage, setTotalUnreadMessage] = useState(0);
  const [lastMessage, setLastMessage] = useState<MessageType | null>(null);

  useEffect(() => {
    if (messages.length) {
      const unreadMessages = messages.filter((message) => !message.isReaded);
      const unreadMessage = unreadMessages[0];
      const dialogLastMessage = messages[messages.length - 1];

      if (dialogLastMessage) {
        setLastMessage(dialogLastMessage);
      }

      if (unreadMessage && !dialogLastMessage?.isReaded) {
        setTotalUnreadMessage(unreadMessages.length);
        setFirstUnreadMessage(unreadMessage);
      }
    }
  }, [messages]);

  useEffect(() => {
    if (
      messagesRef.current &&
      messages.length &&
      (lastMessage?.isReaded || lastMessage?.authorId === currentUserId)
    ) {
      messagesRef.current.scrollTo(0, 9999999);
    }
  }, [messages, messagesRef.current, lastMessage]);

  return (
    <div className="chat__messages" ref={messagesRef}>
      {messages.map((message) => (
        <div key={`${message.id}`}>
          <ChatUnreadMessageInfo
            messages={messages}
            message={message}
            currentUserId={currentUserId}
            lastMessage={lastMessage}
            firstUnreadMessage={firstUnreadMessage}
            totalUnreadMessage={totalUnreadMessage}
          />
          <div
            className={classNames("chat__box__message", {
              "chat__box__message-revert": message.authorId === currentUserId,
            })}
          >
            <Blockinfo revert={message.authorId === currentUserId}>
              <Blockinfo.Img>
                <Badge
                  dot={connectedUserIds.includes(message.authorId)}
                  color={BadgeColorType.green}
                >
                  <Avatar
                    shape={AvatarShapeType.circle}
                    fullname={message.authorFullName}
                    color={
                      message.authorId === currentUserId
                        ? AvatarColorType.blue
                        : AvatarColorType.gray
                    }
                  />
                </Badge>
              </Blockinfo.Img>
              <Blockinfo.Info>
                <ChatWrapMessage
                  message={message}
                  isMe={message.authorId === currentUserId}
                />
              </Blockinfo.Info>
            </Blockinfo>
          </div>
        </div>
      ))}
      {!messages.length ? <ChatEmpty isMessages={true} /> : null}
    </div>
  );
};
