/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import { DialogType, UserType } from "../../../types";

type ChatConnectionStatusType = {
  currentDialog: DialogType | Omit<DialogType, "lastMessage"> | null;
  dialogUsers?: UserType[];
  connectedUserIds?: string[];
  isOnline?: boolean;
};

export const ChatConnectionStatus = ({
  currentDialog,
  dialogUsers,
  connectedUserIds,
  isOnline,
}: ChatConnectionStatusType) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [connectedUsers, setConnectedUsers] = useState(0);

  useEffect(() => {
    if (connectedUserIds && dialogUsers && dialogUsers.length) {
      setTotalUsers(dialogUsers.length);
      setConnectedUsers(
        dialogUsers
          .filter((user) => connectedUserIds.includes(user.id))
          .reduce((acc) => (acc += 1), 0)
      );
    }
  }, [dialogUsers, connectedUserIds]);

  if (currentDialog && currentDialog.isGroup) {
    return (
      <>
        {connectedUsers ? (
          <div>
            {connectedUsers} из {totalUsers} в сети
          </div>
        ) : null}
      </>
    );
  }

  return <>{isOnline ? <span>онлайн</span> : <span>офлайн</span>}</>;
};
