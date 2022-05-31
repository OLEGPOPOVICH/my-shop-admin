import React, { FC, ReactNode } from "react";
import { LoaderIcon } from "@common/components/UI";
import "./Loader";

type LoaderType = {
  loader: boolean | undefined;
  height?: number;
  children: ReactNode;
};

export const Loader: FC<LoaderType> = ({
  loader,
  height,
  children,
}): JSX.Element => {
  if (loader) {
    return (
      <div className="loader">
        <LoaderIcon height={height} />
      </div>
    );
  }

  return <>{loader !== undefined ? <>{children}</> : null}</>;
};
