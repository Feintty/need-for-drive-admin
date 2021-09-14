import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  sidebarInit,
  sidebarSetActive,
} from "../../store/Sidebar/SidebarActionCreators";
import sidebarData from "./SidebarData";
import classNames from "classnames";
import Burger from "../../assets/icons/sidebar-burger.svg";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isHiding, setIsHiding] = useState(true);
  const { elements } = useTypedSelector((state) => state.sidebar);

  const elementsClass = classNames({
    sidebar__elements: true,
    "sidebar-hide": isHiding,
  });

  useEffect(() => {
    dispatch(sidebarInit(sidebarData));
  }, []);

  const onElementClick = (
    route: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    history.push(route);
    dispatch(sidebarSetActive(event.currentTarget.id));
    setIsHiding(true);
  };

  const createSidebarElements = () => {
    return elements.map((element) => {
      const key = `sidebar-element-${element.text}`;
      return (
        <li
          key={key}
          id={key}
          onClick={(e) => onElementClick(element.route, e)}
          className={classNames("sidebar__element", {
            active: element.route === history.location.pathname,
          })}
        >
          {element.text}
        </li>
      );
    });
  };

  return (
    <div className="sidebar">
      <button
        type="button"
        onClick={() => setIsHiding(!isHiding)}
        className="sidebar__burger"
      >
        <img src={Burger} alt="burger" className="sidebar__burger-icon" />
      </button>
      <div className="sidebar__heading">
        <img className="sidebar__logo" src={Logo} alt="logo" />
        <h2 className="sidebar__name">Need for car</h2>
      </div>
      <ul className={elementsClass}>{createSidebarElements()}</ul>
    </div>
  );
};
export default Sidebar;
