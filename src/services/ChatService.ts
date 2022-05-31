import { AxiosResponse } from "axios";
import { api } from "@common/http";
import { DialogType, UserType, MessageType } from "@features/chat";
import { ParamsType, ResponseType } from "./";

export class ChatService {
  static getUserDialogs(
    userId: string,
    params: ParamsType
  ): Promise<AxiosResponse<ResponseType<DialogType[]>>> {
    return api.get<ResponseType<DialogType[]>>(`chat/dialogs/${userId}`, {
      withCredentials: true,
      params,
    });
  }

  static getDialogMessages(
    dialogId: string
  ): Promise<AxiosResponse<ResponseType<MessageType[]>>> {
    return api.get<ResponseType<MessageType[]>>(`chat/messages/${dialogId}`, {
      withCredentials: true,
    });
  }

  static setMessagesRead(
    dialogId: string,
    unreadMessages: MessageType[]
  ): Promise<AxiosResponse<ResponseType<MessageType[]>>> {
    const data = { unreadMessages };
    return api.post<ResponseType<MessageType[]>>(
      `chat/messages/${dialogId}/read/set`,
      data,
      { withCredentials: true }
    );
  }

  static getDialogUsers(
    dialogId: string
  ): Promise<AxiosResponse<ResponseType<UserType[]>>> {
    return api.get<ResponseType<UserType[]>>(`chat/users/${dialogId}`, {
      withCredentials: true,
    });
  }

  static getConnectedUserIds(): Promise<AxiosResponse<ResponseType<string[]>>> {
    return api.get<ResponseType<string[]>>(`chat/users/ids/connected`, {
      withCredentials: true,
    });
  }

  static getUsers(
    params: ParamsType
  ): Promise<AxiosResponse<ResponseType<UserType[]>>> {
    return api.get<ResponseType<UserType[]>>(`chat/users`, {
      withCredentials: true,
      params,
    });
  }
}
