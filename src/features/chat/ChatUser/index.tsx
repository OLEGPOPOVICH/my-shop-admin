import React from "react";
import { Avatar, AvatarShapeType, Blockinfo } from "@src/components/UI";
import { UserType } from "../types";

import "./ChatUser";

type ChatUserType = {
  user: UserType;
  selectUser: (user: UserType) => void;
};

export const ChatUser = ({ user, selectUser }: ChatUserType) => {
  const handleSelectUser = () => {
    selectUser(user);
  };

  return (
    <div className="chat__user" onClick={handleSelectUser}>
      <Blockinfo>
        <Blockinfo.Img>
          <Avatar
            shape={AvatarShapeType.circle}
            fullname={user.fullName}
            isGenerateBgColor={true}
          />
        </Blockinfo.Img>
        <Blockinfo.Info>
          <div className="chat__user__info">
            <div className="chat__user_name">{user.fullName}</div>
          </div>
        </Blockinfo.Info>
      </Blockinfo>
    </div>
  );
};
