import { AuthorizationActions } from "./AutorizationActions";

interface IInitialAuthorizationElement {
  value: string;
  isCorrect: boolean;
}

export interface IInitialAuthorization {
  mail: IInitialAuthorizationElement;
  password: IInitialAuthorizationElement;
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
