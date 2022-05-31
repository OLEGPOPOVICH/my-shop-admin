import { RootReducerType } from "@store";

const getDialogs = () => (state: RootReducerType) => state.chatReducer.dialogs;

const getCurrentDialog = () => (state: RootReducerType) =>
  state.chatReducer.currentDialog;

const getNewDialog = () => (state: RootReducerType) =>
  state.chatReducer.newDialog;

const getCurrentDialogId = () => (state: RootReducerType) =>
  state.chatReducer.currentDialog?.id;

const getConnectedUserIds = () => (state: RootReducerType) =>
  state.chatReducer.connectedUserIds;

const getUsers = () => (state: RootReducerType) => state.chatReducer.users;

const getDialogUsers = () => (state: RootReducerType) =>
  state.chatReducer.dialogUsers;

const getDialogMessages = () => (state: RootReducerType) =>
  state.chatReducer.dialogMessages;

export const selectors = {
  getDialogs,
  getCurrentDialog,
  getNewDialog,
  getCurrentDialogId,
  getConnectedUserIds,
  getUsers,
  getDialogUsers,
  getDialogMessages,
};
