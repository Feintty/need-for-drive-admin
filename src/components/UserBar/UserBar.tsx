import React from "react";
import "./UserBar.scss";
import User from "../../assets/img/user-avatar.png";
import DropDown from "../../assets/icons/dropdown.svg";
import { useDispatch } from "react-redux";
import { exitUser } from "../../store/User/UserActionCreators";

interface IUserBarProps {
  name: string;
}

const UserBar: React.FC<IUserBarProps> = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <div className="user-bar">
      <img alt="avatar" className="user-bar__avatar" src={User} />
      <div className="user-bar__name">{name}</div>
      <img alt="dropdown" className="user-bar__dropdown" src={DropDown} />
      <div onClick={() => dispatch(exitUser())} className="user-bar__exit">
        Выйти
      </div>
    </div>
  );
};

export default UserBar;
