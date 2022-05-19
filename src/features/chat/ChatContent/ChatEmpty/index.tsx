import React from "react";
import srcSmptyChatSvg from "@src/assets/img/emptyChat.svg";
import { Img } from "@src/components/UI";
import "./ChatEmpty";

type ChatEmptyType = {
  isMessages?: boolean;
};

export const ChatEmpty = ({ isMessages }: ChatEmptyType) => (
  <div className="chat__empty">
    <Img src={srcSmptyChatSvg} />
    {isMessages ? (
      <p>Нет сообщиний.</p>
    ) : (
      <>
        <p>Выберите или</p>
        <p>создайте новый чат</p>
      </>
    )}
  </div>
);
