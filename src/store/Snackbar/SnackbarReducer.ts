import { SnackbarAction, IInitialSnackbar } from "./SnackbarTypes";
import { SnackbarActions } from "./SnackbarActions";

const initialSnackbar: IInitialSnackbar = {
  isOpened: false,
  id: "",
  message: "",
  delay: 3000,
  closable: false,
  type: "success",
};

const SnackbarReducer = (
  state = initialSnackbar,
  action: SnackbarAction
): IInitialSnackbar => {
  switch (action.type) {
    case SnackbarActions.SNACKBAR_OPEN:
      return {
        ...initialSnackbar,
        isOpened: true,
        ...action.payload,
      };
    case SnackbarActions.SNACKBAR_CLOSE:
      return {
        ...initialSnackbar,
        isOpened: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
