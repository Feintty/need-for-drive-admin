import { AuthorizationAction, IInitialUser } from "./AuthorizationTypes";
import { AuthorizationActions } from "./AutorizationActions";

const initialUser: IInitialUser = {
  mail: {
    value: "",
    isCorrect: false,
  },
  password: {
    value: "",
    isCorrect: false,
  },
  loggedData: null,
};

const AuthorizationReducer = (
  state = initialUser,
  action: AuthorizationAction
): IInitialUser => {
  switch (action.type) {
    case AuthorizationActions.AUTHORIZATION_LOGIN:
      return { ...state, ...action.payload };
    case AuthorizationActions.AUTHORIZATION_CHANGE_MAIL:
      return { ...state, ...action.payload };
    case AuthorizationActions.AUTHORIZATION_CHANGE_PASSWORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AuthorizationReducer;
