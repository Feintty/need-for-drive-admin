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

  const firstSide = () => {
    const pagesArray = [];
    for (let i = 1; i <= 4; i++) {
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
    pagesArray.push(<a className="pages-bar__mark">...</a>);
    pagesArray.push(
      <a onClick={onNumberClick} className="pages-bar__page">
        {pagesCount}
      </a>
    );
    return pagesArray;
  };

  const middleSide = (
    <>
      <a onClick={onNumberClick} className="pages-bar__page">
        1
      </a>
      <a className="pages-bar__mark">...</a>
      <a onClick={onNumberClick} className="pages-bar__page">
        {currentPage - 1}
      </a>
      <a onClick={onNumberClick} className="pages-bar__active">
        {currentPage}
      </a>
      <a onClick={onNumberClick} className="pages-bar__page">
        {currentPage + 1}
      </a>
      <a className="pages-bar__mark">...</a>
      <a onClick={onNumberClick} className="pages-bar__page">
        {pagesCount}
      </a>
    </>
  );

  const endSide = () => {
    const pagesArray = [];
    pagesArray.push(
      <a onClick={onNumberClick} className="pages-bar__page">
        1
      </a>
    );
    pagesArray.push(<a className="pages-bar__mark">...</a>);

    for (let i = pagesCount - 3; i <= pagesCount; i++) {
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
        <a
          className="pages-bar__back"
          role="button"
          onClick={onBackClick}
        >{`«`}</a>
        {currentPage < 4 && pagesCount > 7 && firstSide().map((el) => el)}
        {currentPage >= 4 &&
          pagesCount > 7 &&
          currentPage < pagesCount - 2 &&
          middleSide}
        {currentPage > pagesCount - 3 &&
          pagesCount > 7 &&
          endSide().map((el) => el)}
        {pagesCount <= 7 && tooShort().map((el) => el)}
        <a
          className="pages-bar__next"
          role="button"
          onClick={onNextClick}
        >{`»`}</a>
      </div>
    );
  return null;
};

export default PagesBar;
