import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";
import SidebarReducer from "./Sidebar/SidebarReducer";
import SnackbarReducer from "./Snackbar/SnackbarReducer";
import UserReducer from "./User/UserReducer";

export const combinedReducers = combineReducers({
  auth: AuthorizationReducer,
  snackbar: SnackbarReducer,
  user: UserReducer,
  sidebar: SidebarReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
