/* eslint-disable no-console */
import React from "react";
import { Button } from "../Button";
import { Modal, ModalType } from "../Modal";

type ModalConfirmType = {
  title?: string;
  msgConfirm?: string;
  onClick: (isConfirm: boolean) => void;
} & Omit<ModalType, "children">;

export const ModalConfirm = ({
  title,
  showModal,
  options,
  onClick,
  msgConfirm,
}: ModalConfirmType) => {
  const handleOkClick = () => onClick(true);
  const handleCancelClick = () => onClick(false);

  return (
    <Modal showModal={showModal} options={options}>
      <Modal.Header isHeader={Boolean(title)} title={title} />
      <Modal.Body>{msgConfirm || "Вы уверены?"}</Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          className="button secondary"
          onClick={handleCancelClick}
        >
          Отмена
        </Button>
        <Button
          type="button"
          className="button primary"
          onClick={handleOkClick}
        >
          Ок
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
