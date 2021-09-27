import React from "react";
import "./Header.scss";
import Search from "../../assets/icons/search.svg";

import Notify from "../Notify/Notify";
import UserBar from "../UserBar/UserBar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img alt="search" className="header__placeholder-icon" src={Search} />
      <input placeholder="Поиск..." className="header__search" type="text" />
      <Notify counter={2} />
      <UserBar name="Admin" />
    </header>
  );
};

export default Header;
