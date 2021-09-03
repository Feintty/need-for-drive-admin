import React from "react";
import "./Snackbar.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { snackbarClose } from "../../store/Snackbar/SnackbarActionCreators";
import Error from "../../assets/icons/error.svg";
import Success from "../../assets/icons/tick-mark.svg";
import Warning from "../../assets/icons/warning.svg";
import Close from "../../assets/icons/close.svg";

const classNames = require("classnames");

interface ISnackbarProps {
  type: "error" | "success" | "warning";
  message: string;
  closable?: boolean;
  delay?: number;
  snackbarId: string;
}

const Snackbar: React.FC<ISnackbarProps> = ({
  type,
  message,
  closable,
  delay = 3000,
  snackbarId,
}) => {
  const dispatch = useDispatch();
  const { isOpened, id } = useTypedSelector((state) => state.snackbar);
  const snackbarClassname = classNames({
    snackbar: true,
    error: type === "error",
    warning: type === "warning",
    success: type === "success",
    closable: closable,
    "non-closable": !closable,
  });

  let index = 1;

  const getImageByType = () => {
    if (type === "error") {
      return Error;
    }
    if (type === "success") {
      return Success;
    }
    if (type === "warning") {
      return Warning;
    }
  };

  const onCloseClick = () => {
    dispatch(snackbarClose(snackbarId));
  };

  if (isOpened && snackbarId === id) {
    if (!closable) {
      return (
        <div
          onAnimationEnd={() => dispatch(snackbarClose(snackbarId))}
          className={snackbarClassname}
          style={{ animationDuration: `${delay}ms`, zIndex: index++ }}
        >
          <img className="snackbar__img" src={getImageByType()} />
          <div className="snackbar__message">{message}</div>
        </div>
      );
    } else {
      return (
        <div
          className={snackbarClassname}
          style={{ animationDuration: `${delay}ms`, zIndex: index++ }}
        >
          <img
            alt="snackbarMark"
            className="snackbar__img"
            src={getImageByType()}
          />
          <div className="snackbar__message">{message}</div>
          <button
            type="button"
            onClick={onCloseClick}
            className="snackbar__close"
          >
            <img alt="close" src={Close} />
          </button>
        </div>
      );
    }
  }
  return null;
};

export default Snackbar;
