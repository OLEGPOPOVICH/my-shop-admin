import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  FC,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import url from "@src/consts";
import { authUserSelectors } from "@src/features/auth";
import {
  setDialogUsers,
  setCurrentDialog,
  setMessage,
  setConnectedUserIds,
  makeMessagesRead,
  updateDialog,
  addDialog,
  MessageType,
  UserType,
  DialogType,
} from "@src/features/chat";

type State = {
  socket: any;
};

type SubscribeType = {
  setMessage: () => void;
  updateDialogUsers: () => void;
  makeMessagesRead: () => void;
  updateDialog: () => void;
  addDialog: () => void;
  updateConnectedUserIds: () => void;
};

type UnsubscribeType = SubscribeType;

type EmitType = {
  joinDialog: (userId: string, currentDialogId: string) => void;
  leaveDialog: (userId: string, urrentDialogId: string) => void;
  newMessage: (message: MessageType) => void;
  createDialog: (dialog: DialogType) => void;
  disconnectUser: (userId: string) => void;
};

type SocketIOClietnActions = {
  subscribe: SubscribeType;
  unsubscribe: UnsubscribeType;
  emit: EmitType;
};

const SocketIOClietnStateContext = createContext<State | undefined>(undefined);
const SocketIOClietnActionsContext = React.createContext<
  SocketIOClietnActions | undefined
>(undefined);

const SocketIOClientProvider: FC = ({ children }) => {
  const dispatch = useDispatch();
  const authUser = useSelector(authUserSelectors());
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
      dispatch(makeMessagesRead());
    }

    if (message.authorId !== authUser?.id) {
      dispatch(setMessage(message));
    }
  };

  const setDialogUsersListener = (dialogUsers: UserType[]) => {
    dispatch(setDialogUsers(dialogUsers));
  };

  const makeMessagesReadListener = () => {
    dispatch(makeMessagesRead());
  };

  const updateDialogListener = (dialog: DialogType) => {
    dispatch(updateDialog(dialog));
  };

  const addDialogListener = (dialog: DialogType) => {
    dispatch(addDialog(dialog));

    if (dialog.lastMessage.authorId === authUser?.id) {
      dispatch(setCurrentDialog(dialog));
    }
  };

  const updateConnectedUserIdsListener = (connectedUserIds: string[]) => {
    dispatch(setConnectedUserIds(connectedUserIds));
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
    <SocketIOClietnStateContext.Provider value={{ socket: socketState }}>
      <SocketIOClietnActionsContext.Provider
        value={{
          subscribe,
          unsubscribe,
          emit,
        }}
      >
        {children}
      </SocketIOClietnActionsContext.Provider>
    </SocketIOClietnStateContext.Provider>
  );
};

const useSocketIOClientState = () => {
  const context = useContext(SocketIOClietnStateContext);

  if (context === undefined) {
    throw new Error(
      "useSocketIOClientState must be used within a SocketIOClientProvider"
    );
  }

  return context;
};

const useSocketIOClientActions = () => {
  const context = useContext(SocketIOClietnActionsContext);

  if (context === undefined) {
    throw new Error(
      "useSocketIOClientActions must be used within a SocketIOClietnActionsContext"
    );
  }

  return context;
};

export {
  SocketIOClientProvider,
  useSocketIOClientState,
  useSocketIOClientActions,
  SocketIOClietnActions,
};
