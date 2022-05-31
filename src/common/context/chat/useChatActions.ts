import { useContext } from "react";
import { ChatActionsContext } from "./chatContext";

export const useChatActions = () => {
  const context = useContext(ChatActionsContext);

  if (context === undefined) {
    throw new Error("useChatActions must be used within a ChatProvider");
  }

  return context;
};
