import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  pagesBarBack,
  pagesBarNext,
  pagesBarSetCurrent,
} from "../../store/PagesBar/PagesBarActionCreators";
import { selectPagesBar } from "../../store/selectors";
import "./PagesBar.scss";
import PagesBarEndSide from "./PagesBarEndSide";
import PagesBarFirstSide from "./PagesBarFirstSide";
import PagesBarMiddleSide from "./PagesBarMiddleSide";

const PagesBar: React.FC = () => {
  const dispatch = useDispatch();
  const { pagesCount, currentPage } = useTypedSelector(selectPagesBar);

  const onBackClick = () => {
    dispatch(pagesBarBack());
  };

  const onNextClick = () => {
    dispatch(pagesBarNext());
  };

  const onNumberClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(pagesBarSetCurrent(Number(event.currentTarget.innerText)));
  };

  const tooShort = () => {
    const pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(
        <a
          onClick={onNumberClick}
          className={
            i === currentPage ? "pages-bar__active" : "pages-bar__page"
          }
        >
          {i}
        </a>
      );
    }
    return pagesArray;
  };

  if (pagesCount)
    return (
      <div className="pages-bar">
        <a className="pages-bar__back" role="button" onClick={onBackClick} />
        <PagesBarFirstSide onNumberClickHandle={onNumberClick} />
        <PagesBarMiddleSide onNumberClickHandle={onNumberClick} />
        <PagesBarEndSide onNumberClickHandle={onNumberClick} />
        {pagesCount <= 7 && tooShort().map((el) => el)}
        <a className="pages-bar__next" role="button" onClick={onNextClick} />
      </div>
    );
  return null;
};

export default PagesBar;
