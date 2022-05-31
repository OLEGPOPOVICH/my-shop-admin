export type UserType = {
  id: string;
  fullName: string;
  email: string;
  avatar: string | null;
  isOnline: boolean;
  dateLastVisit: string;
};

export type DialogType = {
  id: string;
  title: string;
  dataCreation: string;
  avatar: string | null;
  isGroup: boolean;
  partnerId: string;
  totalUnreadMsg: number;
  lastMessage: MessageType;
};

export type MessageType = {
  id: string;
  dataCreation: string;
  message?: string | null;
  isReaded: boolean;
  attachments?: string[] | [];
  audio?: string | null;
  video?: string | null;
  authorId: string;
  authorFullName: string;
  dialogId: string;
  partnerId: string;
};
