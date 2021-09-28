import { SidebarActions } from "./SidebarActions";

export interface IInitialSidebarElement {
  text: string;
  route: string;
  icon?: string;
}

export interface IInitialSidebar {
  active?: string;
  elements: Array<IInitialSidebarElement>;
}

export interface ISidebarInit {
  type: SidebarActions.SIDEBAR_INIT;
  payload: Array<IInitialSidebarElement>;
}

export interface ISidebarSetActive {
  type: SidebarActions.SIDEBAR_SET_ACTIVE;
  payload: string;
}

export type SidebarAction = ISidebarInit | ISidebarSetActive;
