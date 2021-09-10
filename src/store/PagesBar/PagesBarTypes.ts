import { PagesBarActions } from "./PagesBarActions";

export interface IInitialPagesBar {
  pagesCount: number;
  currentPage: number;
}

interface IPagesBarNext {
  type: PagesBarActions.PAGESBAR_NEXT;
}

interface IPagesBarBack {
  type: PagesBarActions.PAGESBAR_BACK;
}

interface IPagesBarInit {
  type: PagesBarActions.PAGESBAR_INIT;
  payload: { pagesCount: number };
}

interface IPagesBarChange {
  type: PagesBarActions.PAGESBAR_CHANGE_CURRENT;
  payload: number;
}

export type PagesBarAction =
  | IPagesBarNext
  | IPagesBarBack
  | IPagesBarInit
  | IPagesBarChange;
