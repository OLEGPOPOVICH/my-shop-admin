import React from "react";
import { useSelector } from "react-redux";
import { Button, ErrorIcon } from "@common/components/UI";
import { globalErrorSelectors } from "@features/globalErrors";

import "./GlobalErrorLayout";

export const GlobalErrorLayout = () => {
  const error = useSelector(globalErrorSelectors.getError());

  return (
    <div className="error__layout">
      <ErrorIcon />
      {error?.title ? <p>{error.title}</p> : null}
      {error?.code ? <p>{error.code}</p> : null}
      {error?.message ? <p>{error.message}</p> : null}
      <Button className="primary" onClick={() => location.reload()}>
        Обновить страницу
      </Button>
    </div>
  );
};
