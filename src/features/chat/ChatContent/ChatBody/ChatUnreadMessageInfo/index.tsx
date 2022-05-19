import React, { useEffect, useRef } from "react";
import { MessageType } from "@src/features/chat";

import "./ChatUnreadMessageInfo";

type ChatUnreadMessageInfoType = {
  messages: MessageType[];
  message: MessageType;
  lastMessage: MessageType | null;
  currentUserId?: string;
  totalUnreadMessage: number;
  firstUnreadMessage: MessageType | null;
};

export const ChatUnreadMessageInfo = ({
  messages,
  message,
  lastMessage,
  currentUserId,
  totalUnreadMessage,
  firstUnreadMessage,
}: ChatUnreadMessageInfoType) => {
  const urneadMessageInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      urneadMessageInfoRef.current &&
      messages.length &&
      (!lastMessage?.isReaded || lastMessage?.authorId !== currentUserId)
    ) {
      urneadMessageInfoRef.current.scrollIntoView();
    }
  }, [messages, urneadMessageInfoRef.current, totalUnreadMessage]);

  return (
    <>
      {firstUnreadMessage &&
      firstUnreadMessage.authorId !== currentUserId &&
      message.id === firstUnreadMessage.id ? (
        <div ref={urneadMessageInfoRef} className="chat__unread__message__info">
          {totalUnreadMessage > 1
            ? "Непрочитанные сообщения"
            : "Непрочитанное сообщение"}
        </div>
      ) : null}
    </>
  );
};
