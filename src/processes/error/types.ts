import { Dispatch } from "react";
import { AuthActionType } from "@features/auth";
import { GlobalErrorActionsType } from "@features/globalError";

export type HandleHTTPErrorProcesseType = (
  dispatch: Dispatch<AuthActionType | GlobalErrorActionsType>
) => void;
