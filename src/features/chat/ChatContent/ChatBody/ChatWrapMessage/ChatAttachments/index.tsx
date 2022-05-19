import React from "react";
import classNames from "classnames";
import "./ChatAttachments";

export type AttachmentType = {
  fileName: string;
  src: string;
};

type ChatAttachmentsType = {
  attachments?: AttachmentType[] | null;
  revert?: boolean;
};

export const ChatAttachments = ({
  attachments,
  revert,
}: ChatAttachmentsType): JSX.Element => (
  <div
    className={classNames("chat__attachments", {
      "chat__attachments-revert": revert,
    })}
  >
    {attachments?.map((attachment, index) => (
      <div key={`${attachment.fileName}-${index}`}>
        <img src={attachment.src} alt={attachment.fileName} />
      </div>
    ))}
  </div>
);
