import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, ErrorIcon } from "@common/components/UI";
import {
  globalErrorActions,
  globalErrorSelectors,
} from "@features/globalErrors";

export const GlobalModalErrors = () => {
  const modalErrors = useSelector(globalErrorSelectors.getModalErrors());
  const dispatch = useDispatch();

  const handleClearErrors = () => {
    dispatch(globalErrorActions.clearErrors());
  };

  const handleUpdatePage = () => {
    location.reload();
  };

  return (
    <Modal showModal={true} options={{ width: "600px" }}>
      <Modal.Header>
        <ErrorIcon />
      </Modal.Header>
      <Modal.Body>
        {modalErrors.map((error, index) => (
          <div key={index}>{error.message}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="secondary margin-right-16"
          onClick={handleUpdatePage}
        >
          Обноовить страницу
        </Button>
        <Button className="primary" onClick={handleClearErrors}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
