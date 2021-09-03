import { SnackbarActions } from "./SnackbarActions";

export interface IInitialSnackbar {
  isOpened: boolean;
  id: string;
}

export interface ISnackbarOpen {
  type: SnackbarActions.SNACKBAR_OPEN;
  payload: {
    id: string;
  };
}

export interface ISnackbarClose {
  type: SnackbarActions.SNACKBAR_CLOSE;
  payload: {
    id: string;
  };
}

export type SnackbarAction = ISnackbarClose | ISnackbarOpen;
