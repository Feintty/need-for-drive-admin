import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterAdd } from "../../store/Filter/FilterActionCreators";
import "./Filter.scss";

interface IFilterProps {
  dataType?: string;
  dataKey?: string;
  head: string;
  data: Array<object>;
  setter?: (args: any) => void;
  description?: string;
  current?: string;
}

const Filter: React.FC<IFilterProps> = ({
  dataType = "",
  head,
  data,
  dataKey = "",
  setter,
  description = "",
  current = "",
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentElement, setCurrentElement] = useState(
    current ? current : head
  );
  const dispatch = useDispatch();

  const listClassname = classNames({
    "dropdown-filter__list": true,
    hide: !isOpened,
  });

  const setByTypeOfFilter = (value: string) => {
    if (setter) {
      setter(value);
    } else {
      dispatch(filterAdd(dataType, dataKey, value));
    }
  };

  const onElementClick = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentElement(event.currentTarget.innerText);
    setIsOpened(!isOpened);
    if (event.currentTarget.id) {
      setByTypeOfFilter(event.currentTarget.id);
    }
  };

  const onFilterClick = () => {
    setIsOpened(!isOpened);
  };

  const onDefaultClick = () => {
    setIsOpened(!isOpened);
    setByTypeOfFilter("");
    setCurrentElement(head);
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
      {description && (
        <div className="dropdown-filter__description">{description}</div>
      )}
      <div className="dropdown-filter__body">
        <div className="dropdown-filter__head" onClick={onFilterClick}>
          {currentElement}
        </div>
        <ul className={listClassname}>
          <li className="dropdown-filter__element" onClick={onDefaultClick}>
            {head}
          </li>
          {createList().map((el) => el)}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
