import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserType } from "@src/features/auth";
import {
  ChatSidebar,
  getUserDialogsThunkCreator,
  getUsersThunkCreator,
  setCurrentDialog,
  setDialogUsers,
  setUsers,
  setMessages,
  setNewDialog,
  dialogsSelectors,
  usersSelectors,
  currentDialogIdSelector,
  errorDialogsSelectors,
  errorUsersSelectors,
  DialogType,
  UserType,
  setDialogs,
} from "@src/features/chat";
import { SocketIOClietnActions } from "@src/SocketIOClientProvider";

type ChatSidebarContainerType = {
  socket: any;
  socketActions: SocketIOClietnActions;
  authUser: AuthUserType;
  connectedUserIds: string[];
  loaders: { [key: string]: boolean };
};

export const ChatSidebarContainer = ({
  socket,
  socketActions,
  authUser,
  connectedUserIds,
  loaders,
}: ChatSidebarContainerType): JSX.Element => {
  const dispatch = useDispatch();
  const [isCreateChat, setIsCreateChat] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const currentDialogId = useSelector(currentDialogIdSelector());
  const dialogs = useSelector(dialogsSelectors());
  const errorDialogs = useSelector(errorDialogsSelectors());
  const users = useSelector(usersSelectors());
  const errorUsers = useSelector(errorUsersSelectors());

  useEffect(() => {
    if (!isCreateChat && authUser?.id) {
      dispatch(
        getUserDialogsThunkCreator(authUser.id, {
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
      dispatch(setDialogs([]));
    };
  }, [socket]);

  useEffect(() => {
    if (isCreateChat) {
      dispatch(getUsersThunkCreator({ query: searchValue }));
    }

    if (!isCreateChat && users.length) {
      dispatch(setUsers([]));
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
    dispatch(setDialogUsers([]));
    setSearchValue("");
    setIsCreateChat(!isCreateChat);
    dispatch(setMessages([]));

    const dialog = dialogs.find((dialog) => dialog.partnerId === user.id);

    if (dialog) {
      dispatch(setCurrentDialog(dialog));
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

      dispatch(setCurrentDialog(null));
      dispatch(setNewDialog(newDialog as Omit<DialogType, "lastMessage">));
    }
  };

  const handleSelectDialog = (dialog: DialogType) => {
    dispatch(setCurrentDialog(dialog));
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
      loaderDialogs={loaders.dialogs}
      loaderUsers={loaders.users}
      errorDialogs={errorDialogs}
      errorUsers={errorUsers}
    />
  );
};
