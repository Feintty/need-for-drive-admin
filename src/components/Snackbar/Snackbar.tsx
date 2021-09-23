import React from "react";
import "./Snackbar.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { snackbarClose } from "../../store/Snackbar/SnackbarActionCreators";
import Error from "../../assets/icons/error.svg";
import Success from "../../assets/icons/tick-mark.svg";
import Warning from "../../assets/icons/warning.svg";
import Close from "../../assets/icons/close.svg";
import { selectSnackbar } from "../../store/selectors";

const classNames = require("classnames");

interface ISnackbarProps {
  snackbarId: string;
}

const Snackbar: React.FC<ISnackbarProps> = ({ snackbarId }) => {
  const dispatch = useDispatch();
  const { isOpened, id, type, message, closable, delay } =
    useTypedSelector(selectSnackbar);
  const snackbarClassname = classNames({
    snackbar: true,
    error: type === "error",
    warning: type === "warning",
    success: type === "success",
    closable: closable,
    "non-closable": !closable,
  });

  const getImageByType = () => {
    switch (type) {
      case "error":
        return Error;
      case "success":
        return Success;
      case "warning":
        return Warning;
    }
  };

  const onCloseClick = () => {
    dispatch(snackbarClose(snackbarId));
  };

  if (!(isOpened && snackbarId === id)) {
    return null;
  }
  return (
    <div
      onAnimationEnd={() => !closable && dispatch(snackbarClose(snackbarId))}
      className={snackbarClassname}
      style={{ animationDuration: `${delay}ms` }}
    >
      <img
        alt="snackbarMark"
        className="snackbar__img"
        src={getImageByType()}
      />
      <div className="snackbar__message">{message}</div>
      {closable && (
        <button
          type="button"
          onClick={onCloseClick}
          className="snackbar__close"
        >
          <img alt="close" src={Close} />
        </button>
      )}
    </div>
  );
};

export default Snackbar;