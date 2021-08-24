import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Input from "../../components/Input/Input";
import "./AuthorizationPage.scss";

const classNames = require("classnames");
const buttonClass = classNames("authorization__login", "button-default");
const linkClass = classNames("authorization__access", "link-default");

const AuthorizationPage = () => {
  return (
    <div className="authorization">
      <div className="authorization__logo">
        <img src={Logo} alt="logo" className="authorization__img" />
        <h2 className="authorization__description">Need for drive</h2>
      </div>
      <div className="authorization__content">
        <h3 className="authorization__heading">Вход</h3>
        <div className="authorization__inputs">
          <Input description="Почта" placeholder="Введите почту" type="text" />
          <Input
            description="Пароль"
            placeholder="Введите пароль"
            type="password"
          />
        </div>
        <div className="authorization__actions">
          <a className={linkClass}>Запросить доступ</a>
          <button className={buttonClass}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage;
