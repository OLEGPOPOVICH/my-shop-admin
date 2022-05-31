import React from "react";
import {
  Badge,
  BadgeColorType,
  BadgePositionType,
} from "@common/components/UI";
import { DialogType, UserType } from "../../../types";
import { ChatConnectionStatus } from "../ChatConnectionStatus";
import "./ChatHeader";

type ChatHeaderType = {
  currentDialog: DialogType | Omit<DialogType, "lastMessage"> | null;
  dialogUsers: UserType[];
  connectedUserIds: string[];
};

export const ChatHeader = ({
  currentDialog,
  dialogUsers,
  connectedUserIds,
}: ChatHeaderType) => (
  <div className="chat__header">
    <div className="chat__header_title">{currentDialog?.title}</div>
    <div className="chat__header__status">
      {currentDialog?.isGroup ? (
        <ChatConnectionStatus
          currentDialog={currentDialog}
          dialogUsers={dialogUsers}
          connectedUserIds={connectedUserIds}
        />
      ) : null}

      {currentDialog && !currentDialog?.isGroup ? (
        <div className="chat__header__badge">
          <Badge
            dot={true}
            position={BadgePositionType.relative}
            color={
              connectedUserIds.includes(currentDialog.partnerId)
                ? BadgeColorType.green
                : BadgeColorType.gray
            }
          />
          <ChatConnectionStatus
            currentDialog={currentDialog}
            isOnline={connectedUserIds.includes(currentDialog.partnerId)}
          />
        </div>
      ) : null}
    </div>
  </div>
);
