/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";
import { ChatService, ParamsType } from "@services";
import { chatActions, ChatActionsType, MessageType } from "@features/chat/";
import { errorProcesses, HandleHTTPErrorProcesseType } from "@processes/error";

/**
 * ## Процесс получения диалогов пользователя
 *
 * @param {string} userId - Id пользователя
 * @param {object} params - Параметры запроса
 *
 * @returns {void}
 */
const getUserDialogs =
  (userId: string, params: ParamsType) =>
  async (dispatch: Dispatch<ChatActionsType | HandleHTTPErrorProcesseType>) => {
    try {
      const response = await ChatService.getUserDialogs(userId, params);
      dispatch(chatActions.setDialogs(response.data.data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс получения пользователей
 *
 * @param {object} params - Параметры запроса
 *
 * @returns {void}
 */
const getUsers =
  (params: ParamsType) =>
  async (dispatch: Dispatch<ChatActionsType | HandleHTTPErrorProcesseType>) => {
    try {
      const response = await ChatService.getUsers(params);
      dispatch(chatActions.setUsers(response.data.data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс получения сообщений диалога
 *
 * @param {string} dialogId - Id диалога
 *
 * @returns {void}
 */
const getDialogMessages =
  (dialogId: string) =>
  async (dispatch: Dispatch<ChatActionsType | HandleHTTPErrorProcesseType>) => {
    try {
      const response = await ChatService.getDialogMessages(dialogId);
      dispatch(chatActions.setMessages(response.data.data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс сделать все сообщения прочитаными
 * @param {string} dialogId - Id диалога
 * @param {MessageType[]} unreadMessages - Непрочитанные сообщения
 *
 * @returns {void}
 */
const setMessagesRead =
  (dialogId: string, unreadMessages: MessageType[]) =>
  (dispatch: Dispatch<ChatActionsType | HandleHTTPErrorProcesseType>) => {
    try {
      ChatService.setMessagesRead(dialogId, unreadMessages);
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс получения пользователей диалога
 *
 * @param {string} dialogId - Id диалога
 *
 * @returns {void}
 */
const getDialogUsers =
  (dialogId: string) =>
  async (dispatch: Dispatch<ChatActionsType | HandleHTTPErrorProcesseType>) => {
    try {
      const response = await ChatService.getDialogUsers(dialogId);
      dispatch(chatActions.setDialogUsers(response.data.data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс получения id подключенных пользователей
 *
 * @param {string} dialogId - Id диалога
 *
 * @returns {void}
 */
const getConnectedUserIds =
  () =>
  async (dispatch: Dispatch<ChatActionsType | HandleHTTPErrorProcesseType>) => {
    try {
      const response = await ChatService.getConnectedUserIds();
      dispatch(chatActions.setConnectedUserIds(response.data.data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

export const processes = {
  getUserDialogs,
  getUsers,
  getDialogMessages,
  setMessagesRead,
  getDialogUsers,
  getConnectedUserIds,
};
