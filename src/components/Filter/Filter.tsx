import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterAdd } from "../../store/Filter/FilterActionCreators";
import "./Filter.scss";

interface IFilterProps {
  dataType: string;
  dataKey: string;
  head: string;
  data: Array<object>;
}

const Filter: React.FC<IFilterProps> = ({ dataType, head, data, dataKey }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentElement, setCurrentElement] = useState(head);
  const dispatch = useDispatch();

  const listClassname = classNames({
    "dropdown-filter__list": true,
    hide: !isOpened,
  });

  const onElementClick = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentElement(event.currentTarget.innerText);
    setIsOpened(!isOpened);
    if (event.currentTarget.id) {
      dispatch(filterAdd(dataType, dataKey, event.currentTarget.id));
    }
  };

  const onHeadClick = () => {
    setIsOpened(!isOpened);
    dispatch(filterAdd(dataType, dataKey, ""));
  };

  const createList = () => {
    return data.map((el) => {
      return (
        <li
          className="dropdown-filter__element"
          key={Object.entries(el)[0][1]}
          id={Object.entries(el)[0][1]}
          onClick={onElementClick}
        >
          {Object.entries(el)[0][0]}
        </li>
      );
    });
  };

  return (
    <div className="dropdown-filter">
      <div className="dropdown-filter__head" onClick={onHeadClick}>
        {currentElement}
      </div>
      <ul className={listClassname}>
        <li className="dropdown-filter__element" onClick={onElementClick}>
          {head}
        </li>
        {createList().map((el) => el)}
      </ul>
    </div>
  );
};

export default Filter;
