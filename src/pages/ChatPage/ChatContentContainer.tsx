import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserType } from "@src/features/auth";
import {
  ChatContent,
  getDialogMessagesThunkCreator,
  getDialogUsersThunkCreator,
  setMessagesReadThunkCreator,
  setNewDialog,
  setMessage,
  updateDialog,
  currentDialogSelector,
  newDialogSelector,
  errorMessagesSelector,
  dialogUsersSelectors,
  dialogMessagesSelector,
  MessageType,
  setMessages,
  setDialogUsers,
} from "@src/features/chat";
import { SocketIOClietnActions } from "@src/SocketIOClientProvider";

type ChatContentContainerType = {
  socket: any;
  socketActions: SocketIOClietnActions;
  authUser: AuthUserType;
  connectedUserIds: string[];
  loaders: { [key: string]: boolean };
};

export const ChatContentContainer = ({
  socket,
  socketActions,
  authUser,
  connectedUserIds,
  loaders,
}: ChatContentContainerType) => {
  const dispatch = useDispatch();
  const currentDialog = useSelector(currentDialogSelector());
  const newDialog = useSelector(newDialogSelector());
  const dialogUsers = useSelector(dialogUsersSelectors());
  const dialogMessages = useSelector(dialogMessagesSelector());
  const errorMessages = useSelector(errorMessagesSelector());

  useEffect(() => {
    if (currentDialog && socket && authUser?.id) {
      socketActions.emit.joinDialog(authUser.id, currentDialog.id);
      dispatch(setNewDialog(null));
      dispatch(getDialogUsersThunkCreator(currentDialog.id));
      dispatch(getDialogMessagesThunkCreator(currentDialog.id));
    }

    return () => {
      if (currentDialog && socket && authUser?.id) {
        socketActions.emit.leaveDialog(authUser.id, currentDialog.id);
      }
    };
  }, [currentDialog]);

  useEffect(() => {
    if (socket) {
      socketActions.subscribe.setMessage();
      socketActions.subscribe.updateDialogUsers();
      socketActions.subscribe.makeMessagesRead();
    }

    return () => {
      socketActions.unsubscribe.setMessage();
      socketActions.unsubscribe.updateDialogUsers();
      socketActions.unsubscribe.makeMessagesRead();
      dispatch(setMessages([]));
      dispatch(setDialogUsers([]));
    };
  }, [socket]);

  const handleSetMessagesRead = (
    dialogId: string,
    unreadMessages: MessageType[]
  ) => {
    dispatch(setMessagesReadThunkCreator(dialogId, unreadMessages));
  };

  const handleSendMessage = (
    message: Pick<MessageType, "id" | "dataCreation" | "message">
  ) => {
    const authorId = authUser?.id;
    const authorFullName = authUser?.fullName;

    if (currentDialog && socket && authorId && authorFullName) {
      const dialog = {
        ...currentDialog,
        lastMessage: {
          ...message,
          dialogId: currentDialog.id,
          authorId,
          partnerId: currentDialog.partnerId,
          authorFullName,
          isReaded: false,
        },
      };

      dispatch(setMessage(dialog.lastMessage));
      dispatch(updateDialog(dialog));
      socketActions.emit.newMessage(dialog.lastMessage);
    }

    if (newDialog && socket && authorId && authorFullName) {
      const dialog = {
        ...newDialog,
        lastMessage: {
          ...message,
          dialogId: newDialog.id,
          authorId,
          partnerId: newDialog.partnerId,
          authorFullName,
          isReaded: false,
        },
      };

      dispatch(setNewDialog(null));
      dispatch(setMessage(dialog.lastMessage));
      socketActions.emit.createDialog(dialog);
    }
  };

  return (
    <ChatContent
      currentUserId={authUser.id}
      currentDialog={currentDialog}
      connectedUserIds={connectedUserIds}
      newDialog={newDialog}
      dialogUsers={dialogUsers}
      dialogMessages={dialogMessages}
      errorMessages={errorMessages}
      loaderMessages={loaders.messages}
      setMessagesRead={handleSetMessagesRead}
      sendMessage={handleSendMessage}
    />
  );
};
