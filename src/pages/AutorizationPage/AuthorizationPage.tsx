import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Input from "../../components/Input/Input";
import "./AuthorizationPage.scss";

const classNames = require("classnames");
const buttonClass = classNames("authorization__login", "button-default");
const linkClass = classNames("authorization__access", "link-default");

const AuthorizationPage: React.FC = () => {
  return (
    <div className="authorization">
      <div className="authorization__logo">
        <img src={Logo} alt="logo" className="authorization__img" />
        <h1 className="authorization__description">Need for drive</h1>
      </div>
      <div className="authorization__content">
        <h3 className="authorization__heading">Вход</h3>
        <form className="authorization__inputs">
          <Input description="Почта" placeholder="Введите почту" type="text" />
          <Input
            description="Пароль"
            placeholder="Введите пароль"
            type="password"
          />
        </form>
        <div className="authorization__actions">
          <a className={linkClass}>Запросить доступ</a>
          <button type="submit" className={buttonClass}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage;
