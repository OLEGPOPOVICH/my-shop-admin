import React from "react";
import classNames from "classnames";
import { formatDistanceToNow, isToday, format, ruLocale } from "@utils";
import {
  Avatar,
  AvatarShapeType,
  Badge,
  BadgeColorType,
  Blockinfo,
  BadgePositionType,
  Readed,
} from "@src/components/UI";
import { DialogType } from "../../types";
import "./ChatDialog";

type ChatDialogType = {
  dialog: DialogType;
  isMe: boolean;
  isActive: boolean;
  isPartnerOnline: boolean;
  selectDialog: (dialog: DialogType) => void;
};

export const ChatDialog = ({
  dialog,
  isMe,
  isActive,
  isPartnerOnline,
  selectDialog,
}: ChatDialogType) => {
  const handleSelectDialog = () => {
    selectDialog(dialog);
  };

  return (
    <div
      className={classNames("chat__dialog", {
        "chat__dialog-active": isActive,
      })}
      onClick={handleSelectDialog}
    >
      <Blockinfo>
        <Blockinfo.Img>
          <Badge
            dot={isPartnerOnline}
            bottom={true}
            color={BadgeColorType.green}
          >
            <Avatar
              shape={AvatarShapeType.circle}
              fullname={dialog.title}
              avatar={dialog.avatar}
              isGenerateBgColor={true}
            />
          </Badge>
        </Blockinfo.Img>
        <Blockinfo.Info>
          <div className="chat__dialog__info">
            <div className="chat__dialog_title">{dialog.title}</div>
            <div className="chat__dialog_message">
              {dialog.lastMessage?.message}
            </div>
            <div className="chat__dialog__state">
              {dialog.lastMessage?.dataCreation ? (
                <div className="chat__dialog_date">
                  {isToday(new Date(dialog.lastMessage.dataCreation))
                    ? format(
                        new Date(dialog.lastMessage.dataCreation),
                        "dd:MM:yyyy"
                      )
                    : formatDistanceToNow(
                        new Date(dialog.lastMessage.dataCreation),
                        {
                          locale: ruLocale,
                          addSuffix: true,
                        }
                      )}
                </div>
              ) : null}

              {!dialog.isGroup && isMe ? (
                <Readed isReaded={dialog.lastMessage?.isReaded} />
              ) : null}

              {!isMe ? (
                <Badge
                  count={dialog.totalUnreadMsg}
                  position={BadgePositionType.relative}
                  overflowCount={99}
                  color={BadgeColorType.red}
                />
              ) : null}
            </div>
          </div>
        </Blockinfo.Info>
      </Blockinfo>
    </div>
  );
};
