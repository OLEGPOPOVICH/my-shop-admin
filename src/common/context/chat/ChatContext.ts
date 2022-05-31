import { createContext } from "react";
import { ChatStateType, ChatActionsType } from "./types";

export const ChatStateContext = createContext<ChatStateType | undefined>(
  undefined
);
export const ChatActionsContext = createContext<ChatActionsType | undefined>(
  undefined
);
