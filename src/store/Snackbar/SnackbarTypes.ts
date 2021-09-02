import { SnackbarActions } from "./SnackbarActions";

export interface IInitialSnackbar {
  isOpened: boolean;
}

export interface ISnackbarOpen {
  type: SnackbarActions.SNACKBAR_OPEN;
}

export interface ISnackbarClose {
  type: SnackbarActions.SNACKBAR_CLOSE;
}

export type SnackbarAction = ISnackbarClose | ISnackbarOpen;
