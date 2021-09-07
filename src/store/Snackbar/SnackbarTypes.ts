import { SnackbarActions } from "./SnackbarActions";

export interface IInitialSnackbar {
  isOpened: boolean;
  id: string;
  closable?: boolean;
  delay?: number;
  message?: string;
  type?: "error" | "success" | "warning";
}

export interface ISnackbarOpen {
  type: SnackbarActions.SNACKBAR_OPEN;
  payload: {
    id: string;
    message: string;
    type: "error" | "success" | "warning";
  };
}

export interface ISnackbarClose {
  type: SnackbarActions.SNACKBAR_CLOSE;
  payload: {
    id: string;
  };
}

export type SnackbarAction = ISnackbarClose | ISnackbarOpen;
