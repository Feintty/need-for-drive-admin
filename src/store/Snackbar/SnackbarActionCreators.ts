import { Dispatch } from "redux";
import { SnackbarAction } from "./SnackbarTypes";
import { SnackbarActions } from "./SnackbarActions";

export const snackbarOpen = () => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActions.SNACKBAR_OPEN,
    });
  };
};

export const snackbarClose = () => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActions.SNACKBAR_CLOSE,
    });
  };
};
