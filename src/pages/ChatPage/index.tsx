import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUserSelectors } from "@src/features/auth";
import { loadersSelectors } from "@src/features/loaders";
import {
  Chat,
  connectedUserIdsSelectors,
  getConnectedUserIdsThunkCreator,
  setConnectedUserIds,
} from "@src/features/chat";
import { ChatSidebarContainer } from "./ChatSidebarContainer";
import { ChatContentContainer } from "./ChatContentContainer";
import {
  useSocketIOClientActions,
  useSocketIOClientState,
} from "@src/SocketIOClientProvider";

export const ChatPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const authUser = useSelector(authUserSelectors());
  const loaders = useSelector(loadersSelectors());
  const { socket } = useSocketIOClientState();
  const socketActions = useSocketIOClientActions();
  const connectedUserIds = useSelector(connectedUserIdsSelectors());

  useEffect(() => {
    dispatch(getConnectedUserIdsThunkCreator());

    return () => {
      dispatch(setConnectedUserIds([]));
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socketActions.subscribe.updateConnectedUserIds();
    }

    return () => {
      socketActions.unsubscribe.updateConnectedUserIds();
    };
  }, [socket]);

  if (!authUser?.id) {
    return <></>;
  }

  return (
    <Chat>
      <ChatSidebarContainer
        socket={socket}
        socketActions={socketActions}
        authUser={authUser}
        connectedUserIds={connectedUserIds}
        loaders={loaders}
      />
      <ChatContentContainer
        socket={socket}
        socketActions={socketActions}
        authUser={authUser}
        connectedUserIds={connectedUserIds}
        loaders={loaders}
      />
    </Chat>
  );
};
