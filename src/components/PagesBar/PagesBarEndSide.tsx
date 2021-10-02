import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectPagesBar } from "../../store/selectors";

interface PagesBarEndSideProps {
  onNumberClickHandle: (event: React.MouseEvent<HTMLElement>) => void;
}

const PagesBarEndSide: React.FC<PagesBarEndSideProps> = ({
  onNumberClickHandle,
}) => {
  const { pagesCount, currentPage } = useTypedSelector(selectPagesBar);

  const endSide = () => {
    const pagesArray = [];
    pagesArray.push(
      <a onClick={onNumberClickHandle} className="pages-bar__page">
        1
      </a>
    );
    pagesArray.push(<a className="pages-bar__mark">...</a>);
    for (let i = pagesCount - 3; i <= pagesCount; i++) {
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
    return pagesArray;
  };

  if (currentPage > pagesCount - 3 && pagesCount > 7) {
    return <>{endSide().map((el) => el)}</>;
  }
  return null;
};

export default PagesBarEndSide;
