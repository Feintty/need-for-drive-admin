import React from "react";
import NotifyIcon from "../../assets/icons/notifications.svg";
import "./Notify.scss";

interface INotifyProps {
  counter: number;
}

const Notify: React.FC<INotifyProps> = ({ counter }) => {
  return (
    <div className="notify">
      <img className="notify__icon" alt="notifications" src={NotifyIcon} />
      <div className="notify__counter">{counter}</div>
    </div>
  );
};

export default Notify;
