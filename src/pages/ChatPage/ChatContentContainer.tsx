/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserType } from "@features/auth";
import {
  ChatContent,
  MessageType,
  chatActions,
  chatSelectors,
} from "@features/chat";
import { chatProcesses } from "@processes/chat";
import { ChatActionsType } from "@common/context/chat";

type ChatContentContainerType = {
  socket: any;
  socketActions: ChatActionsType;
  authUser: AuthUserType;
  connectedUserIds: string[];
};

export const ChatContentContainer = ({
  socket,
  socketActions,
  authUser,
  connectedUserIds,
}: ChatContentContainerType) => {
  const dispatch = useDispatch();
  const currentDialog = useSelector(chatSelectors.getCurrentDialog());
  const newDialog = useSelector(chatSelectors.getNewDialog());
  const dialogUsers = useSelector(chatSelectors.getDialogUsers());
  const dialogMessages = useSelector(chatSelectors.getDialogMessages());

  useEffect(() => {
    if (currentDialog && socket && authUser?.id) {
      socketActions.emit.joinDialog(authUser.id, currentDialog.id);
      dispatch(chatActions.setNewDialog(null));
      dispatch(chatProcesses.getDialogUsers(currentDialog.id));
      dispatch(chatProcesses.getDialogMessages(currentDialog.id));
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
      dispatch(chatActions.setMessages([]));
      dispatch(chatActions.setDialogUsers([]));
    };
  }, [socket]);

  const handleSetMessagesRead = (
    dialogId: string,
    unreadMessages: MessageType[]
  ) => {
    dispatch(chatProcesses.setMessagesRead(dialogId, unreadMessages));
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

      dispatch(chatActions.setMessage(dialog.lastMessage));
      dispatch(chatActions.updateDialog(dialog));
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

      dispatch(chatActions.setNewDialog(null));
      dispatch(chatActions.setMessage(dialog.lastMessage));
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
      setMessagesRead={handleSetMessagesRead}
      sendMessage={handleSendMessage}
    />
  );
};
