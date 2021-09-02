import { AuthorizationActions } from "./AutorizationActions";

export interface IInitialAuthorization {
  mail: {
    value: string;
    isCorrect: boolean;
  };
  password: {
    value: string;
    isCorrect: boolean;
  };
}

export interface IAuthorizationChangeMail {
  type: AuthorizationActions.AUTHORIZATION_CHANGE_MAIL;
  payload: { mail: { value: string; isCorrect: boolean } };
}

export interface IAuthorizationChangePassword {
  type: AuthorizationActions.AUTHORIZATION_CHANGE_PASSWORD;
  payload: { password: { value: string; isCorrect: boolean } };
}

export type AuthorizationAction =
  | IAuthorizationChangeMail
  | IAuthorizationChangePassword;
