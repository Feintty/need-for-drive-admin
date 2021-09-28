import React from "react";
import { useHistory } from "react-router-dom";
import "./ErrorTab.scss";

const ErrorTab = () => {
  const history = useHistory();
  const onBackClick = () => {
    history.goBack();
    history.go(0);
  };
  return (
    <div className="error-tab">
      <div className="error-tab__content">
        <h2 className="error-tab__error-code">500</h2>
        <h3 className="error-tab__description">Что-то пошло не так</h3>
        <div className="error-tab__tip">
          Попробуйте перезагрузить страницу...
        </div>
      </div>
      <button className="error-tab__back button-default" onClick={onBackClick}>
        Назад
      </button>
    </div>
  );
};

export default ErrorTab;
