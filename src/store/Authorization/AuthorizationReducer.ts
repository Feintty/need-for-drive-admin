import IUser from "./IUser";
import AuthorizationActions from "./AutorizationActions";

const defaultUser: IUser = {
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
  state = defaultUser,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case AuthorizationActions.LOGIN:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default AuthorizationReducer;
