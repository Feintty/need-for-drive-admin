import { Dispatch } from "redux";
import { PagesBarAction } from "./PagesBarTypes";
import { PagesBarActions } from "./PagesBarActions";

export const pagesBarInit = (currentPage: number, pagesCount: number) => {
  return (dispatch: Dispatch<PagesBarAction>) => {
    dispatch({
      type: PagesBarActions.PAGESBAR_INIT,
      payload: { currentPage, pagesCount },
    });
  };
};

export const pagesBarInitCalculated = (
  currentPage: number,
  countInPage: number,
  countSummary: number
) => {
  const pagesCount = Math.ceil(countSummary / countInPage);
  return (dispatch: Dispatch<PagesBarAction>) => {
    dispatch({
      type: PagesBarActions.PAGESBAR_INIT,
      payload: { currentPage, pagesCount },
    });
  };
};

export const pagesBarBack = () => {
  return (dispatch: Dispatch<PagesBarAction>) => {
    dispatch({
      type: PagesBarActions.PAGESBAR_BACK,
    });
  };
};

export const pagesBarNext = () => {
  return (dispatch: Dispatch<PagesBarAction>) => {
    dispatch({
      type: PagesBarActions.PAGESBAR_NEXT,
    });
  };
};

export const pagesBarSetCurrent = (currentPage: number) => {
  return (dispatch: Dispatch<PagesBarAction>) => {
    dispatch({
      type: PagesBarActions.PAGESBAR_CHANGE_CURRENT,
      payload: currentPage,
    });
  };
};
