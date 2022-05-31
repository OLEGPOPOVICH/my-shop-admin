import { useContext } from "react";
import { ChatStateContext } from "./chatContext";

export const useChatState = () => {
  const context = useContext(ChatStateContext);

  if (context === undefined) {
    throw new Error("useChatState must be used within a ChatProvider");
  }

  return context;
};
