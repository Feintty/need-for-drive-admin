import React from "react";
import { useParams } from "react-router-dom";
// import Input from "../Input/Input";
import "./CitiesManager.scss";

// interface CitiesManagerProps {
//   data: object;
// }

const CitiesManager: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="cities-manager">
      <div className="cities-manager__name">
        {id ? "Редактирование города" : "Добавление города"}
      </div>
      <div className="cities-manager__content">
        {/* <Input
          description="Пароль"
          placeholder="Введите пароль"
          type="password"
          setter={setPassword}
          isCorrect={true}
        /> */}
      </div>
    </div>
  );
};

export default CitiesManager;
