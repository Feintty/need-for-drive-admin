import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";
import OrdersReducer from "./Orders/OrdersReducer";
import PagesBarReducer from "./PagesBar/PagesBarReducer";
import SidebarReducer from "./Sidebar/SidebarReducer";
import SnackbarReducer from "./Snackbar/SnackbarReducer";
import UserReducer from "./User/UserReducer";

export const combinedReducers = combineReducers({
  auth: AuthorizationReducer,
  snackbar: SnackbarReducer,
  user: UserReducer,
  sidebar: SidebarReducer,
  orders: OrdersReducer,
  pages: PagesBarReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
