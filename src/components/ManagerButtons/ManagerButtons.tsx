import classNames from "classnames";
import React from "react";
import "./ManagerButtons.scss";

interface ManagerButtonsProps {
  acceptButtonHandler: () => void;
  acceptButtonToggle: boolean;
  backButtonHandler: () => void;
  deleteButtonHandler: () => void;
  isDeleteButtonDisplay: boolean;
}

const ManagerButtons: React.FC<ManagerButtonsProps> = ({
  acceptButtonHandler,
  acceptButtonToggle,
  backButtonHandler,
  deleteButtonHandler,
  isDeleteButtonDisplay,
}) => {
  const saveButtonClass = classNames(
    "manager-buttons__button",
    acceptButtonToggle ? "button-correct" : "button-disabled"
  );

  return (
    <div className="manager-buttons">
      <button onClick={acceptButtonHandler} className={saveButtonClass}>
        Сохранить
      </button>
      <button
        onClick={backButtonHandler}
        className="manager-buttons__button button-default"
      >
        Отмена
      </button>
      {isDeleteButtonDisplay && (
        <button
          onClick={deleteButtonHandler}
          className="manager-buttons__button button-alert"
        >
          Удалить
        </button>
      )}
    </div>
  );
};

export default ManagerButtons;
