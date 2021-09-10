import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  pagesBarBack,
  pagesBarNext,
  pagesBarSetCurrent,
} from "../../store/PagesBar/PagesBarActionCreators";
import "./PagesBar.scss";

const PagesBar = () => {
  const dispatch = useDispatch();
  const { pagesCount, currentPage } = useTypedSelector((state) => state.pages);

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
    const returnArr = [];
    for (let i = 1; i <= 4; i++) {
      returnArr.push(
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
    returnArr.push(<a className="pages-bar__mark">...</a>);
    returnArr.push(
      <a onClick={onNumberClick} className="pages-bar__page">
        {pagesCount}
      </a>
    );
    return returnArr;
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
    const returnArr = [];
    returnArr.push(
      <a onClick={onNumberClick} className="pages-bar__page">
        1
      </a>
    );
    returnArr.push(<a className="pages-bar__mark">...</a>);

    for (let i = pagesCount - 3; i <= pagesCount; i++) {
      returnArr.push(
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
    return returnArr;
  };

  if (pagesCount)
    return (
      <div className="pages-bar">
        <a
          className="pages-bar__back"
          role="button"
          onClick={onBackClick}
        >{`«`}</a>
        {currentPage < 4 && firstSide().map((el) => el)}
        {currentPage >= 4 && currentPage < pagesCount - 2 && middleSide}
        {currentPage > pagesCount - 3 && endSide().map((el) => el)}
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
