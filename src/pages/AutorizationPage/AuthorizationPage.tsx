import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../../assets/icons/logo.svg";
import Input from "../../components/Input/Input";
import Snackbar from "../../components/Snackbar/Snackbar";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  setMail,
  setPassword,
} from "../../store/Authorization/AuthorizationActionCreators";
import { snackbarOpen } from "../../store/Snackbar/SnackbarActionCreators";
import { login } from "../../store/User/UserActionCreators";
import "./AuthorizationPage.scss";

const classNames = require("classnames");

const AuthorizationPage: React.FC = () => {
  const dispatch = useDispatch();
  const { mail, password } = useTypedSelector((state) => state.auth);
  const { isLogged, error, isLoaded } = useTypedSelector((state) => state.user);
  const { isOpened } = useTypedSelector((state) => state.snackbar);

  const buttonClass = classNames(
    "authorization__login",
    mail.isCorrect && password.isCorrect ? "button-default" : "button-disabled"
  );

  const onLoginClick = (): void => {
    dispatch(login(mail.value, password.value));
    if (!isOpened) {
      dispatch(snackbarOpen());
    }
  };

  const snackbars = () => {
    if (error) {
      return <Snackbar type="error" message="Пользователь не найден!" />;
    } else if (isLogged) {
      return <Snackbar type="success" message="Вы успешно вошли!" />;
    }
  };

  const linkClass = classNames("authorization__access", "link-default");

  return (
    <div className="authorization">
      {snackbars()}
      <div className="authorization__wrapper">
        <div className="authorization__logo">
          <img src={Logo} alt="logo" className="authorization__img" />
          <h1 className="authorization__description">Need for drive</h1>
        </div>
        <form className="authorization__content">
          <h3 className="authorization__heading">Вход</h3>
          <div className="authorization__inputs">
            <Input
              description="Почта"
              placeholder="Введите почту"
              type="text"
              setter={setMail}
              isCorrect={mail.isCorrect}
            />
            <Input
              description="Пароль"
              placeholder="Введите пароль"
              type="password"
              setter={setPassword}
              isCorrect={password.isCorrect}
            />
          </div>
          <div className="authorization__actions">
            <a className={linkClass}>Запросить доступ</a>
            <button
              onClick={onLoginClick}
              type="button"
              className={buttonClass}
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationPage;
