import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../assets/icons/logo.svg";
import Input from "../../components/Input/Input";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  setMail,
  setPassword,
} from "../../store/Authorization/AuthorizationActionCreators";
import { selectAuth } from "../../store/selectors";
import { login } from "../../store/User/UserActionCreators";
import "./AuthorizationPage.scss";

const classNames = require("classnames");

const AuthorizationPage: React.FC = () => {
  const dispatch = useDispatch();
  const { mail, password } = useTypedSelector(selectAuth);

  const buttonClass = classNames(
    "authorization__login",
    mail.isCorrect && password.isCorrect ? "button-default" : "button-disabled"
  );

  useEffect(() => {
    dispatch(setMail(""));
    dispatch(setPassword(""));
  }, []);

  const onLoginClick = (): void => {
    dispatch(login(mail.value, password.value));
  };

  const mailSetter = (mailValue: string) => {
    dispatch(setMail(mailValue));
  };

  const passwordSetter = (passwordValue: string) => {
    dispatch(setPassword(passwordValue));
  };

  return (
    <div className="authorization">
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
              setter={mailSetter}
              isCorrect={mail.isCorrect}
              value={mail.value}
            />
            <Input
              description="Пароль"
              placeholder="Введите пароль"
              type="password"
              setter={passwordSetter}
              isCorrect={password.isCorrect}
              value={password.value}
            />
          </div>
          <div className="authorization__actions">
            <a className="authorization__access link-default">
              Запросить доступ
            </a>
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
