import { SnackbarAction, IInitialSnackbar } from "./SnackbarTypes";
import { SnackbarActions } from "./SnackbarActions";

const initialSnackbar: IInitialSnackbar = {
  isOpened: false,
  id: "",
};

const SnackbarReducer = (
  state = initialSnackbar,
  action: SnackbarAction
): IInitialSnackbar => {
  switch (action.type) {
    case SnackbarActions.SNACKBAR_OPEN:
      return {
        isOpened: true,
        ...action.payload,
      };
    case SnackbarActions.SNACKBAR_CLOSE:
      return {
        isOpened: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
