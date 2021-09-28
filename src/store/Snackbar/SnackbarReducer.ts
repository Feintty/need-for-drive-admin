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
        id: action.payload.id,
        message: action.payload.message,
        type: action.payload.type,
      };
    case SnackbarActions.SNACKBAR_CLOSE:
      return {
        ...initialSnackbar,
        isOpened: false,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
