/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserType } from "@features/auth";
import {
  ChatSidebar,
  chatActions,
  chatSelectors,
  DialogType,
  UserType,
} from "@features/chat";
import { chatProcesses } from "@processes/chat";
import { ChatActionsType } from "@common/context/chat";

type ChatSidebarContainerType = {
  socket: any;
  socketActions: ChatActionsType;
  authUser: AuthUserType;
  connectedUserIds: string[];
};

export const ChatSidebarContainer = ({
  socket,
  socketActions,
  authUser,
  connectedUserIds,
}: ChatSidebarContainerType): JSX.Element => {
  const dispatch = useDispatch();
  const [isCreateChat, setIsCreateChat] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const currentDialogId = useSelector(chatSelectors.getCurrentDialogId());
  const dialogs = useSelector(chatSelectors.getDialogs());
  const users = useSelector(chatSelectors.getUsers());

  useEffect(() => {
    if (!isCreateChat && authUser?.id) {
      dispatch(
        chatProcesses.getUserDialogs(authUser.id, {
          query: searchValue,
        })
      );
    }
  }, [searchValue, isCreateChat]);

  useEffect(() => {
    if (socket) {
      socketActions.subscribe.updateDialog();
      socketActions.subscribe.addDialog();
    }

    return () => {
      socketActions.unsubscribe.updateDialog();
      socketActions.unsubscribe.addDialog();
      dispatch(chatActions.setDialogs([]));
    };
  }, [socket]);

  useEffect(() => {
    if (isCreateChat) {
      dispatch(chatProcesses.getUsers({ query: searchValue }));
    }

    if (!isCreateChat && users.length) {
      dispatch(chatActions.setUsers([]));
    }
  }, [isCreateChat, searchValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  const handleToggleCreateChat = () => {
    setIsCreateChat(!isCreateChat);
  };

  const handleSelectUser = (user: UserType) => {
    dispatch(chatActions.setDialogUsers([]));
    setSearchValue("");
    setIsCreateChat(!isCreateChat);
    dispatch(chatActions.setMessages([]));

    const dialog = dialogs.find((dialog) => dialog.partnerId === user.id);

    if (dialog) {
      dispatch(chatActions.setCurrentDialog(dialog));
    } else {
      const newDialog = {
        id: `${Date.now()}`,
        title: user.fullName,
        dataCreation: `${new Date()}`,
        avatar: user.avatar,
        isGroup: false,
        partnerId: user.id,
        totalUnreadMsg: 0,
      };

      dispatch(chatActions.setCurrentDialog(null));
      dispatch(
        chatActions.setNewDialog(newDialog as Omit<DialogType, "lastMessage">)
      );
    }
  };

  const handleSelectDialog = (dialog: DialogType) => {
    dispatch(chatActions.setCurrentDialog(dialog));
  };

  return (
    <ChatSidebar
      dialogs={dialogs}
      users={users}
      currentUserId={authUser.id}
      currentDialogId={currentDialogId}
      connectedUserIds={connectedUserIds}
      searchChange={handleSearchChange}
      isCreateChat={isCreateChat}
      searchValue={searchValue}
      clearSearch={handleClearSearch}
      toggleCreateChat={handleToggleCreateChat}
      selectUser={handleSelectUser}
      selectDialog={handleSelectDialog}
    />
  );
};
