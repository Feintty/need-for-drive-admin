import { UserAction, IInitialUser } from "./UserTypes";
import { UserActions } from "./UserActions";

const initialUser: IInitialUser = {
  accessToken: "",
  refreshToken: "",
  isLogged: false,
  error: false,
  isLoaded: false,
};

const UserReducer = (state = initialUser, action: UserAction): IInitialUser => {
  switch (action.type) {
    case UserActions.USER_LOGIN_SUCCES:
      return {
        ...state,
        ...action.payload,
        isLogged: true,
        error: false,
        isLoaded: true,
      };
    case UserActions.USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLogged: false,
        isLoaded: true,
      };
    case UserActions.USER_DEFAULT:
      return { ...initialUser };
    default:
      return state;
  }
};

export default UserReducer;
