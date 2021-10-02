import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectPagesBar } from "../../store/selectors";

interface PagesBarMiddleSideProps {
  onNumberClickHandle: (event: React.MouseEvent<HTMLElement>) => void;
}

const PagesBarMiddleSide: React.FC<PagesBarMiddleSideProps> = ({
  onNumberClickHandle,
}) => {
  const { pagesCount, currentPage } = useTypedSelector(selectPagesBar);
  if (currentPage >= 4 && pagesCount > 7 && currentPage < pagesCount - 2) {
    return (
      <>
        <a onClick={onNumberClickHandle} className="pages-bar__page">
          1
        </a>
        <a className="pages-bar__mark">...</a>
        <a onClick={onNumberClickHandle} className="pages-bar__page">
          {currentPage - 1}
        </a>
        <a onClick={onNumberClickHandle} className="pages-bar__active">
          {currentPage}
        </a>
        <a onClick={onNumberClickHandle} className="pages-bar__page">
          {currentPage + 1}
        </a>
        <a className="pages-bar__mark">...</a>
        <a onClick={onNumberClickHandle} className="pages-bar__page">
          {pagesCount}
        </a>
      </>
    );
  }
  return null;
};

export default PagesBarMiddleSide;
