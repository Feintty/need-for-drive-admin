import { SnackbarAction, IInitialSnackbar } from "./SnackbarTypes";
import { SnackbarActions } from "./SnackbarActions";

const initialSnackbar: IInitialSnackbar = {
  isOpened: false,
};

const SnackbarReducer = (
  state = initialSnackbar,
  action: SnackbarAction
): IInitialSnackbar => {
  switch (action.type) {
    case SnackbarActions.SNACKBAR_OPEN:
      return {
        isOpened: true,
      };
    case SnackbarActions.SNACKBAR_CLOSE:
      return {
        isOpened: false,
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
