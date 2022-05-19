import React from "react";
import { DialogType, MessageType, UserType } from "../types";

import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { ChatEmpty } from "./ChatEmpty";

import "./ChatContent";

type ChatContentType = {
  currentUserId: string;
  currentDialog: DialogType | null;
  connectedUserIds: string[];
  newDialog: Omit<DialogType, "lastMessage"> | null;
  dialogUsers: UserType[];
  dialogMessages: MessageType[];
  errorMessages: string | null;
  loaderMessages?: boolean;
  setMessagesRead: (dialogId: string, unreadMessages: MessageType[]) => void;
  sendMessage: (
    message: Pick<MessageType, "id" | "dataCreation" | "message">
  ) => void;
};

export const ChatContent = ({
  currentUserId,
  currentDialog,
  connectedUserIds,
  newDialog,
  dialogUsers,
  dialogMessages,
  errorMessages,
  loaderMessages,
  setMessagesRead,
  sendMessage,
}: ChatContentType) => (
  <div className="chat__content">
    {currentDialog || newDialog ? (
      <>
        <ChatHeader
          currentDialog={currentDialog || newDialog}
          dialogUsers={dialogUsers}
          connectedUserIds={connectedUserIds}
        />
        <ChatBody
          currentUserId={currentUserId}
          dialogMessages={dialogMessages}
          connectedUserIds={connectedUserIds}
          errorMessages={errorMessages}
          loaderMessages={loaderMessages}
          setMessagesRead={setMessagesRead}
        />
        <ChatFooter sendMessage={sendMessage} />
      </>
    ) : (
      <ChatEmpty />
    )}
  </div>
);
