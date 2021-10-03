import { Dispatch } from "redux";
import { IInitialSidebarElement, SidebarAction } from "./SidebarTypes";
import { SidebarActions } from "./SidebarActions";

export const sidebarInit = (sidebarElements: Array<IInitialSidebarElement>) => {
  return (dispatch: Dispatch<SidebarAction>) => {
    dispatch({
      type: SidebarActions.SIDEBAR_INIT,
      payload: sidebarElements,
    });
  };
};

export const sidebarSetActive = (active: string) => {
  return (dispatch: Dispatch<SidebarAction>) => {
    dispatch({
      type: SidebarActions.SIDEBAR_SET_ACTIVE,
      payload: active,
    });
  };
};
