import React from "react";
import { Icon, Tag } from "@src/components/UI";
import { LoaderWrap } from "@src/features/loaders";
import { DialogType, UserType } from "../types";
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
  loaderDialogs?: boolean;
  loaderUsers?: boolean;
  errorDialogs: string | null;
  errorUsers: string | null;
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
  loaderUsers,
  errorDialogs,
  errorUsers,
}: ChatSidebarType) => (
  <div className="chat__sidebar">
    <div className="chat__sidebar__header">
      <ChatSearch
        searchValue={searchValue}
        searchChange={searchChange}
        searchDisabled={Boolean(errorDialogs)}
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
      {!isCreateChat && (
        <LoaderWrap loader={false} height="50" error={errorDialogs}>
          {dialogs.map((dialog) => (
            <ChatDialog
              key={dialog.id}
              dialog={dialog}
              isMe={dialog.lastMessage?.authorId === currentUserId}
              isActive={dialog.id === currentDialogId}
              isPartnerOnline={connectedUserIds.includes(dialog.partnerId)}
              selectDialog={selectDialog}
            />
          ))}
        </LoaderWrap>
      )}

      {isCreateChat && (
        <LoaderWrap loader={loaderUsers} height="50" error={errorUsers}>
          {users.map((user) => (
            <ChatUser key={user.id} user={user} selectUser={selectUser} />
          ))}
        </LoaderWrap>
      )}
    </div>
  </div>
);
