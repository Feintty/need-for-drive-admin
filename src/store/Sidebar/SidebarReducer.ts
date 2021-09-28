import { IInitialSidebar, SidebarAction } from "./SidebarTypes";
import { SidebarActions } from "./SidebarActions";
import initialSnackbar from "./SidebarInitial";

const SidebarReducer = (
  state = initialSnackbar,
  action: SidebarAction
): IInitialSidebar => {
  switch (action.type) {
    case SidebarActions.SIDEBAR_INIT:
      return { elements: action.payload };
    case SidebarActions.SIDEBAR_SET_ACTIVE:
      return { active: action.payload, elements: state.elements };
    default:
      return state;
  }
};

export default SidebarReducer;
