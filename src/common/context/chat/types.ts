/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageType, DialogType } from "@features/chat";

export type SubscribeType = {
  setMessage: () => void;
  updateDialogUsers: () => void;
  makeMessagesRead: () => void;
  updateDialog: () => void;
  addDialog: () => void;
  updateConnectedUserIds: () => void;
};

export type UnsubscribeType = SubscribeType;

export type EmitType = {
  joinDialog: (userId: string, currentDialogId: string) => void;
  leaveDialog: (userId: string, urrentDialogId: string) => void;
  newMessage: (message: MessageType) => void;
  createDialog: (dialog: DialogType) => void;
  disconnectUser: (userId: string) => void;
};

export type ChatStateType = {
  socket: any;
};

export type ChatActionsType = {
  subscribe: SubscribeType;
  unsubscribe: UnsubscribeType;
  emit: EmitType;
};
