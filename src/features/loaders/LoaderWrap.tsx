import React, { FC, ReactNode } from "react";
import { Loader } from "./Loader";
import { LoaderError, LoaderErrorType } from "./LoaderError";

type LoaderWrapType = {
  loader: boolean | undefined;
  height?: string;
  error?: LoaderErrorType;
  isIconError?: boolean;
  children: ReactNode;
};

export const LoaderWrap: FC<LoaderWrapType> = ({
  loader,
  height,
  error,
  isIconError = true,
  children,
}): JSX.Element => {
  if (error) {
    return <LoaderError error={error} height={height} isIcon={isIconError} />;
  }

  if (loader) {
    return <Loader height={height} />;
  }

  return <>{loader !== undefined ? <>{children}</> : null}</>;
};
