import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "@features/auth";
import { Chat, chatSelectors, chatActions } from "@features/chat";
import { chatProcesses } from "@processes/chat";
import { ChatSidebarContainer } from "./ChatSidebarContainer";
import { ChatContentContainer } from "./ChatContentContainer";
import { useChatState, useChatActions } from "@common/context/chat";

const ChatPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const authUser = useSelector(authSelectors.getUser());
  const connectedUserIds = useSelector(chatSelectors.getConnectedUserIds());
  const { socket } = useChatState();
  const socketActions = useChatActions();

  useEffect(() => {
    dispatch(chatProcesses.getConnectedUserIds());

    return () => {
      dispatch(chatActions.setConnectedUserIds([]));
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

  return (
    <>
      {authUser ? (
        <Chat>
          <ChatSidebarContainer
            socket={socket}
            socketActions={socketActions}
            authUser={authUser}
            connectedUserIds={connectedUserIds}
          />
          <ChatContentContainer
            socket={socket}
            socketActions={socketActions}
            authUser={authUser}
            connectedUserIds={connectedUserIds}
          />
        </Chat>
      ) : null}
    </>
  );
};

export default ChatPage;
