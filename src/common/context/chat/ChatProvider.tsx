/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import url from "@src/consts";
import { authSelectors } from "@features/auth";
import { chatActions, MessageType, UserType, DialogType } from "@features/chat";
import { ChatStateContext, ChatActionsContext } from "./chatContext";

export const ChatProvider: FC = ({ children }) => {
  const dispatch = useDispatch();
  const authUser = useSelector(authSelectors.getUser());
  const [socketState, setScocketState] = useState<any>(null);

  useEffect(() => {
    if (authUser?.id && !socketState) {
      const socket = io(url.SOCKET_URL, {
        withCredentials: true,
      });

      setScocketState(socket);
    }
  }, [authUser]);

  useEffect(() => {
    if (socketState) {
      socketState.emit("connectedUser", authUser?.id);
    }
  }, [socketState]);

  const setMessageListener = (message: MessageType) => {
    if (message.authorId === authUser?.id && message.isReaded) {
      dispatch(chatActions.makeMessagesRead());
    }

    if (message.authorId !== authUser?.id) {
      dispatch(chatActions.setMessage(message));
    }
  };

  const setDialogUsersListener = (dialogUsers: UserType[]) => {
    dispatch(chatActions.setDialogUsers(dialogUsers));
  };

  const makeMessagesReadListener = () => {
    dispatch(chatActions.makeMessagesRead());
  };

  const updateDialogListener = (dialog: DialogType) => {
    dispatch(chatActions.updateDialog(dialog));
  };

  const addDialogListener = (dialog: DialogType) => {
    dispatch(chatActions.addDialog(dialog));

    if (dialog.lastMessage.authorId === authUser?.id) {
      dispatch(chatActions.setCurrentDialog(dialog));
    }
  };

  const updateConnectedUserIdsListener = (connectedUserIds: string[]) => {
    dispatch(chatActions.setConnectedUserIds(connectedUserIds));
  };

  const subscribe = {
    setMessage: () => {
      socketState.on("setMessage", setMessageListener);
    },
    updateDialogUsers: () => {
      socketState.on("updateDialogUsers", setDialogUsersListener);
    },
    makeMessagesRead: () => {
      socketState.on("makeMessagesRead", makeMessagesReadListener);
    },
    updateDialog: () => {
      socketState.on("updateDialog", updateDialogListener);
    },
    addDialog: () => {
      socketState.on("addDialog", addDialogListener);
    },
    updateConnectedUserIds: () => {
      socketState.on("updateConnectedUserIds", updateConnectedUserIdsListener);
    },
  };

  const unsubscribe = {
    setMessage: () => {
      socketState.off("setMessage", setMessageListener);
    },
    updateDialogUsers: () => {
      socketState.off("updateDialogUsers", setDialogUsersListener);
    },
    makeMessagesRead: () => {
      socketState.off("makeMessagesRead", makeMessagesReadListener);
    },
    updateDialog: () => {
      socketState.off("updateDialog", updateDialogListener);
    },
    addDialog: () => {
      socketState.off("addDialog", addDialogListener);
    },
    updateConnectedUserIds: () => {
      socketState.off("updateConnectedUserIds", updateConnectedUserIdsListener);
    },
  };

  const emit = {
    joinDialog: (userId: string, currentDialogId: string) => {
      socketState.emit("joinDialog", userId, currentDialogId);
    },
    leaveDialog: (userId: string, currentDialogId: string) => {
      socketState.emit("leaveDialog", userId, currentDialogId);
    },
    newMessage: (message: MessageType) => {
      socketState.emit("newMessage", message);
    },
    createDialog: (dialog: DialogType) => {
      socketState.emit("createDialog", dialog);
    },
    disconnectUser: (userId: string) => {
      socketState.emit("disconnectUser", userId, socketState.id);
    },
  };

  return (
    <ChatStateContext.Provider value={{ socket: socketState }}>
      <ChatActionsContext.Provider
        value={{
          subscribe,
          unsubscribe,
          emit,
        }}
      >
        {children}
      </ChatActionsContext.Provider>
    </ChatStateContext.Provider>
  );
};
