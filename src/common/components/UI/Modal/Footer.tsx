import React, { FC } from "react";
import { Button } from "../Button";

type HeaderType = {
  closeButtonLabel?: string;
  onClose?: () => void;
  afterClose?: () => void;
};

export const Footer: FC<HeaderType> = ({
  closeButtonLabel,
  onClose,
  afterClose,
  children,
}) => {
  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }

    if (afterClose && typeof afterClose === "function") {
      afterClose();
    }
  };

  return (
    <>
      <div className="modal__footer">
        {children || (
          <Button type="button" onClick={handleCloseClick}>
            {closeButtonLabel || "Закрыть"}
          </Button>
        )}
      </div>
    </>
  );
};
