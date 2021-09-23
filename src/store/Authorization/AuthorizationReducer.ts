import {
  AuthorizationAction,
  IInitialAuthorization,
} from "./AuthorizationTypes";
import { AuthorizationActions } from "./AutorizationActions";

const initialUser: IInitialAuthorization = {
  mail: {
    value: "",
    isCorrect: false,
  },
  password: {
    value: "",
    isCorrect: false,
  },
};

const AuthorizationReducer = (
  state = initialUser,
  action: AuthorizationAction
): IInitialAuthorization => {
  switch (action.type) {
    case AuthorizationActions.AUTHORIZATION_CHANGE_MAIL:
      return { ...state, ...action.payload };
    case AuthorizationActions.AUTHORIZATION_CHANGE_PASSWORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AuthorizationReducer;
