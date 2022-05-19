/* eslint-disable no-console */
import { Dispatch } from "react";
import { LoaderActionType, removeLoader, setLoader } from "@features/loaders";
import { AuthActionType, setIsAuth } from "@features/auth";
import { ChatService, ParamsType } from "@services";
import {
  setDialogs,
  ChatActionsType,
  setUsers,
  setMessages,
  setErrorMessages,
  setErrorUsers,
  setErrorDialogs,
  setDialogUsers,
  setConnectedUserIds,
} from "./actions";
import { MessageType } from "./types";

export const getUserDialogsThunkCreator =
  (userId: string, params: ParamsType) =>
  async (
    dispatch: Dispatch<ChatActionsType | AuthActionType | LoaderActionType>
  ) => {
    try {
      dispatch(setLoader("dialogs"));
      const response = await ChatService.getUserDialogs(userId, params);
      dispatch(setDialogs(response.data.data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;

      if (typeof errorMsg === "string" && errorMsg.includes("401")) {
        dispatch(
          setIsAuth({
            isAuth: false,
            user: null,
          })
        );
        return;
      }

      dispatch(setErrorDialogs(errorMsg as string));
    }

    dispatch(removeLoader("dialogs"));
  };

export const getUsersThunkCreator =
  (params: ParamsType) =>
  async (
    dispatch: Dispatch<ChatActionsType | AuthActionType | LoaderActionType>
  ) => {
    try {
      dispatch(setLoader("users"));
      const response = await ChatService.getUsers(params);
      dispatch(setUsers(response.data.data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;

      if (typeof errorMsg === "string" && errorMsg.includes("401")) {
        dispatch(
          setIsAuth({
            isAuth: false,
            user: null,
          })
        );
        return;
      }

      dispatch(setErrorUsers(errorMsg as string));
    }

    dispatch(removeLoader("users"));
  };

export const getDialogMessagesThunkCreator =
  (dialogId: string) =>
  async (
    dispatch: Dispatch<ChatActionsType | AuthActionType | LoaderActionType>
  ) => {
    try {
      dispatch(setLoader("messages"));
      const response = await ChatService.getDialogMessages(dialogId);
      dispatch(setMessages(response.data.data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;

      if (typeof errorMsg === "string" && errorMsg.includes("401")) {
        dispatch(
          setIsAuth({
            isAuth: false,
            user: null,
          })
        );
        return;
      }

      dispatch(setErrorMessages(errorMsg as string));
    }

    dispatch(removeLoader("messages"));
  };

export const setMessagesReadThunkCreator =
  (dialogId: string, unreadMessages: MessageType[]) => () => {
    try {
      ChatService.setMessagesRead(dialogId, unreadMessages);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.log(errorMsg);
    }
  };

export const getDialogUsersThunkCreator =
  (dialogId: string) =>
  async (dispatch: Dispatch<ChatActionsType | AuthActionType>) => {
    try {
      const response = await ChatService.getDialogUsers(dialogId);
      dispatch(setDialogUsers(response.data.data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.log(errorMsg);
    }
  };

export const getConnectedUserIdsThunkCreator =
  () => async (dispatch: Dispatch<ChatActionsType>) => {
    try {
      const response = await ChatService.getConnectedUserIds();
      dispatch(setConnectedUserIds(response.data.data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.log(errorMsg);
    }
  };
