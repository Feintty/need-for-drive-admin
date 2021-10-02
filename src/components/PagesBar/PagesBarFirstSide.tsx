import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectPagesBar } from "../../store/selectors";

interface PagesBarFirstSideProps {
  onNumberClickHandle: (event: React.MouseEvent<HTMLElement>) => void;
}

const PagesBarFirstSide: React.FC<PagesBarFirstSideProps> = ({
  onNumberClickHandle,
}) => {
  const { pagesCount, currentPage } = useTypedSelector(selectPagesBar);

  const firstSide = () => {
    const pagesArray = [];
    for (let i = 1; i <= 4; i++) {
      pagesArray.push(
        <a
          onClick={onNumberClickHandle}
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
      <a onClick={onNumberClickHandle} className="pages-bar__page">
        {pagesCount}
      </a>
    );
    return pagesArray;
  };
  if (currentPage < 4 && pagesCount > 7) {
    return <>{firstSide().map((el) => el)}</>;
  }
  return null;
};

export default PagesBarFirstSide;
