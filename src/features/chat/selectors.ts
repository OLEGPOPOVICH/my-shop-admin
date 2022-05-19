import { RootReducerType } from "@store";

export const dialogsSelectors = () => (state: RootReducerType) =>
  state.chatReducer.dialogs;

export const errorDialogsSelectors = () => (state: RootReducerType) =>
  state.chatReducer.errors.dialogs;

export const currentDialogSelector = () => (state: RootReducerType) =>
  state.chatReducer.currentDialog;

export const newDialogSelector = () => (state: RootReducerType) =>
  state.chatReducer.newDialog;

export const currentDialogIdSelector = () => (state: RootReducerType) =>
  state.chatReducer.currentDialog?.id;

export const connectedUserIdsSelectors = () => (state: RootReducerType) =>
  state.chatReducer.connectedUserIds;

export const usersSelectors = () => (state: RootReducerType) =>
  state.chatReducer.users;

export const dialogUsersSelectors = () => (state: RootReducerType) =>
  state.chatReducer.dialogUsers;

export const errorUsersSelectors = () => (state: RootReducerType) =>
  state.chatReducer.errors.users;

export const dialogMessagesSelector = () => (state: RootReducerType) =>
  state.chatReducer.dialogMessages;

export const errorMessagesSelector = () => (state: RootReducerType) =>
  state.chatReducer.errors.messages;
