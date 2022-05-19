import { DialogType, UserType, MessageType } from "./types";

export const SET_DIALOGS = "SET_DIALOGS";
export const SET_ERROR_DIALOGS = "SET_ERROR_DIALOGS";
export const SET_CURRENT_DIALOG = "SET_CURRENT_DIALOG";
export const SET_NEW_DIALOG = "SET_NEW_DIALOG";
export const UPDATE_DIALOG = "UPDATE_DIALOG";
export const ADD_DIALOG = "ADD_DIALOG";

export const SET_MESSAGES = "SET_MESSAGES";
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_ERROR_MESSAGES = "SET_ERROR_MESSAGES";
export const MAKE_MESSAGES_READ = "MAKE_MESSAGES_READ";

export const SET_USERS = "SET_USERS";
export const SET_ERROR_USERS = "SET_ERROR_USERS";

export const SET_DIALOG_USERS = "SET_DIALOG_USERS";
export const SET_CONNECTED_USER_IDS = "SET_CONNECTED_USER_IDS";

// Типы для диалога
type SetDialogsActionType = {
  type: typeof SET_DIALOGS;
  payload: DialogType[];
};

type SetErrorDialogsActionType = {
  type: typeof SET_ERROR_DIALOGS;
  payload: string;
};

type SetCurrentDialogActionType = {
  type: typeof SET_CURRENT_DIALOG;
  payload: DialogType | null;
};

type SetNewDialogActionType = {
  type: typeof SET_NEW_DIALOG;
  payload: Omit<DialogType, "lastMessage"> | null;
};

type UpdateDialogActionType = {
  type: typeof UPDATE_DIALOG;
  payload: DialogType;
};

type AddDialogActionType = {
  type: typeof ADD_DIALOG;
  payload: DialogType;
};

// Типы для сообщений
type SetMessagesActionType = {
  type: typeof SET_MESSAGES;
  payload: MessageType[];
};

type SetMessageActionType = {
  type: typeof SET_MESSAGE;
  payload: MessageType;
};
type SetErrorMessagesActionType = {
  type: typeof SET_ERROR_MESSAGES;
  payload: string;
};
type MakeMessagesReadActionType = {
  type: typeof MAKE_MESSAGES_READ;
};

// Типы для списка пользователей
type SetUsersActionType = {
  type: typeof SET_USERS;
  payload: UserType[];
};
type SetErrorUsersActionType = {
  type: typeof SET_ERROR_USERS;
  payload: string;
};

// Типы для списка подключенных пользователей
type SetDialogUsersActionType = {
  type: typeof SET_DIALOG_USERS;
  payload: UserType[];
};

type SetConnectedUserIdsActionType = {
  type: typeof SET_CONNECTED_USER_IDS;
  payload: string[];
};

export type ChatActionsType =
  | SetDialogsActionType
  | SetErrorDialogsActionType
  | SetCurrentDialogActionType
  | SetNewDialogActionType
  | UpdateDialogActionType
  | AddDialogActionType
  | SetMessagesActionType
  | SetMessageActionType
  | SetErrorMessagesActionType
  | MakeMessagesReadActionType
  | SetUsersActionType
  | SetErrorUsersActionType
  | SetDialogUsersActionType
  | SetConnectedUserIdsActionType;

// Action creators для диалога
export const setDialogs = (payload: DialogType[]): SetDialogsActionType => ({
  type: SET_DIALOGS,
  payload,
});

export const setErrorDialogs = (
  payload: string
): SetErrorDialogsActionType => ({
  type: SET_ERROR_DIALOGS,
  payload,
});

export const setCurrentDialog = (
  payload: DialogType | null
): SetCurrentDialogActionType => ({
  type: SET_CURRENT_DIALOG,
  payload,
});

export const setNewDialog = (
  payload: Omit<DialogType, "lastMessage"> | null
): SetNewDialogActionType => ({
  type: SET_NEW_DIALOG,
  payload,
});

export const updateDialog = (payload: DialogType): UpdateDialogActionType => ({
  type: UPDATE_DIALOG,
  payload,
});

export const addDialog = (payload: DialogType): AddDialogActionType => ({
  type: ADD_DIALOG,
  payload,
});

// Action creators для сообщений
export const setMessages = (payload: MessageType[]): SetMessagesActionType => ({
  type: SET_MESSAGES,
  payload,
});

export const setMessage = (payload: MessageType): SetMessageActionType => ({
  type: SET_MESSAGE,
  payload,
});

export const makeMessagesRead = (): MakeMessagesReadActionType => ({
  type: MAKE_MESSAGES_READ,
});

export const setErrorMessages = (
  payload: string
): SetErrorMessagesActionType => ({
  type: SET_ERROR_MESSAGES,
  payload,
});

// Action creators  для списка пользователей
export const setUsers = (payload: UserType[]): SetUsersActionType => ({
  type: SET_USERS,
  payload,
});

// Action creators  списка подключенных пользователей
export const setDialogUsers = (
  payload: UserType[]
): SetDialogUsersActionType => ({
  type: SET_DIALOG_USERS,
  payload,
});

export const setErrorUsers = (payload: string): SetErrorUsersActionType => ({
  type: SET_ERROR_USERS,
  payload,
});

export const setConnectedUserIds = (
  payload: string[]
): SetConnectedUserIdsActionType => ({
  type: SET_CONNECTED_USER_IDS,
  payload,
});
