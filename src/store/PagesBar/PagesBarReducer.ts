import { PagesBarActions } from "./PagesBarActions";
import PagesBarInitial from "./PagesBarInitial";
import { IInitialPagesBar, PagesBarAction } from "./PagesBarTypes";

const PagesBarReducer = (
  state = PagesBarInitial,
  action: PagesBarAction
): IInitialPagesBar => {
  switch (action.type) {
    case PagesBarActions.PAGESBAR_INIT:
      return { ...action.payload, currentPage: state.currentPage };
    case PagesBarActions.PAGESBAR_BACK:
      return {
        ...state,
        currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
      };
    case PagesBarActions.PAGESBAR_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PagesBarActions.PAGESBAR_CHANGE_CURRENT:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default PagesBarReducer;
