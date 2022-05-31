import {
  SET_DIALOGS,
  ChatActionsType,
  SET_CURRENT_DIALOG,
  SET_NEW_DIALOG,
  UPDATE_DIALOG,
  ADD_DIALOG,
  SET_USERS,
  SET_MESSAGES,
  SET_MESSAGE,
  SET_DIALOG_USERS,
  MAKE_MESSAGES_READ,
  SET_CONNECTED_USER_IDS,
} from "./actions";
import { DialogType, UserType, MessageType } from "./types";

const initialState = {
  dialogs: [] as DialogType[],
  currentDialog: null as DialogType | null,
  newDialog: null as Omit<DialogType, "lastMessage"> | null,
  users: [] as UserType[],
  dialogUsers: [] as UserType[],
  connectedUserIds: [] as string[],
  dialogMessages: [] as MessageType[],
};

type InitialStateType = typeof initialState;

export const chatReducer = (
  state = initialState,
  action: ChatActionsType
): InitialStateType => {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: [...action.payload],
      };
    case UPDATE_DIALOG:
      return {
        ...state,
        dialogs: [
          ...state.dialogs.map((dialog) => {
            if (dialog.id === action.payload.id) {
              return action.payload;
            }

            return dialog;
          }),
        ],
      };
    case ADD_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs, action.payload],
      };
    case SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.payload,
      };
    case SET_NEW_DIALOG:
      return {
        ...state,
        newDialog: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case SET_DIALOG_USERS:
      return {
        ...state,
        dialogUsers: [...action.payload],
      };
    case SET_CONNECTED_USER_IDS:
      return {
        ...state,
        connectedUserIds: [...action.payload],
      };
    case SET_MESSAGES:
      return {
        ...state,
        dialogMessages: [...action.payload],
      };
    case SET_MESSAGE: {
      return {
        ...state,
        dialogMessages: [...state.dialogMessages, action.payload],
      };
    }
    case MAKE_MESSAGES_READ:
      return {
        ...state,
        dialogMessages: [
          ...state.dialogMessages.map((message) => ({
            ...message,
            isReaded: true,
          })),
        ],
      };
    default:
      return state;
  }
};
