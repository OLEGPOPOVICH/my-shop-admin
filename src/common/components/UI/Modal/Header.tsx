import React, { FC } from "react";

type HeaderType = {
  isHeader?: boolean;
  title?: string;
};

export const Header: FC<HeaderType> = ({
  isHeader = true,
  title,
  children,
}) => (
  <>
    {isHeader && (
      <div className="modal__header">
        {children || title || "Заголовок окна"}
      </div>
    )}
  </>
);
