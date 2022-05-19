import React, { useEffect } from "react";
import { LoaderWrap } from "@src/features/loaders";
import { MessageType } from "../../types";
import { ChatMessages } from "./ChatMessages";

import "./ChatBody";

type ChatBodyType = {
  currentUserId: string;
  dialogMessages: MessageType[];
  connectedUserIds: string[];
  errorMessages: string | null;
  loaderMessages?: boolean;
  setMessagesRead: (dialogId: string, nreadMessages: MessageType[]) => void;
};

export const ChatBody = ({
  currentUserId,
  dialogMessages,
  connectedUserIds,
  errorMessages,
  setMessagesRead,
}: ChatBodyType) => {
  useEffect(() => {
    const unreadMessages = dialogMessages.filter(
      (message) => !message.isReaded
    );

    if (
      unreadMessages.length &&
      unreadMessages[0]?.authorId !== currentUserId
    ) {
      const dialogId = unreadMessages[0]?.dialogId as string;
      setMessagesRead(dialogId, unreadMessages);
    }
  }, [dialogMessages]);

  return (
    <div className="chat__body">
      <LoaderWrap loader={false} error={errorMessages}>
        <ChatMessages
          messages={dialogMessages}
          currentUserId={currentUserId}
          connectedUserIds={connectedUserIds}
        />
      </LoaderWrap>
    </div>
  );
};
