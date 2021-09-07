import { Dispatch } from "redux";
import { SnackbarAction } from "./SnackbarTypes";
import { SnackbarActions } from "./SnackbarActions";

export const snackbarOpen = (
  id: string,
  message: string,
  type: "error" | "success" | "warning"
) => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActions.SNACKBAR_OPEN,
      payload: {
        id,
        message,
        type,
      },
    });
  };
};

export const snackbarClose = (id: string) => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActions.SNACKBAR_CLOSE,
      payload: {
        id,
      },
    });
  };
};
