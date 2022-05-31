import React from "react";
import { Icon, Tag } from "@common/components/UI";
import { DialogType, UserType } from "../../types";
import { ChatDialog } from "./ChatDialog";
import { ChatSearch } from "../ChatSearch";
import { ChatUser } from "../ChatUser";

import "./ChatSidebar";

type ChatSidebarType = {
  dialogs: DialogType[];
  users: UserType[];
  currentUserId?: string;
  currentDialogId?: string;
  connectedUserIds: string[];
  searchValue: string;
  isCreateChat: boolean;
  searchChange: (value: string) => void;
  clearSearch: () => void;
  toggleCreateChat: () => void;
  selectUser: (user: UserType) => void;
  selectDialog: (dialog: DialogType) => void;
};

export const ChatSidebar = ({
  dialogs,
  users,
  currentDialogId,
  currentUserId,
  connectedUserIds,
  searchValue,
  isCreateChat,
  searchChange,
  clearSearch,
  toggleCreateChat,
  selectUser,
  selectDialog,
}: ChatSidebarType) => (
  <div className="chat__sidebar">
    <div className="chat__sidebar__header">
      <ChatSearch
        searchValue={searchValue}
        searchChange={searchChange}
        clearSearch={clearSearch}
      />
      <div className="chat__sidebar__actions">
        <Tag
          className={isCreateChat ? "tag-selected" : ""}
          icon={<Icon>{isCreateChat ? "close" : "add"}</Icon>}
          onClick={toggleCreateChat}
        >
          Создать чат
        </Tag>
        <Tag icon={<Icon>add</Icon>}>Создать группу</Tag>
      </div>
    </div>
    <div className="chat__sidebar__body">
      {!isCreateChat &&
        dialogs.map((dialog) => (
          <ChatDialog
            key={dialog.id}
            dialog={dialog}
            isMe={dialog.lastMessage?.authorId === currentUserId}
            isActive={dialog.id === currentDialogId}
            isPartnerOnline={connectedUserIds.includes(dialog.partnerId)}
            selectDialog={selectDialog}
          />
        ))}

      {isCreateChat &&
        users.map((user) => (
          <ChatUser key={user.id} user={user} selectUser={selectUser} />
        ))}
    </div>
  </div>
);
