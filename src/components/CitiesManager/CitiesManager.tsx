import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  addData,
  deleteData,
  setCitiesManagerData,
  updateData,
} from "../../store/CitiesManager/CitiesManagerActionCreators";
import { selectCities, selectCitiesManager } from "../../store/selectors";
import Input from "../Input/Input";
import "./CitiesManager.scss";

const CitiesManager: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useTypedSelector(selectCitiesManager);
  const citiesData = useTypedSelector(selectCities);

  const saveButtonClass = classNames(
    "cities-manager__button",
    data.name ? "button-correct" : "button-disabled"
  );

  useEffect(() => {
    if (id) {
      const cityById = citiesData.data?.find((el) => el.id === id);
      dispatch(setCitiesManagerData({ id, name: cityById.name }));
    } else {
      dispatch(setCitiesManagerData({ id: "", name: "" }));
    }
  }, []);

  const setCitiesManagerDataName = (name: string) => {
    dispatch(setCitiesManagerData({ name: name }));
  };

  const acceptClickHandler = () => {
    if (id) {
      dispatch(updateData());
    } else {
      dispatch(addData());
    }
    history.goBack();
  };

  const backClickHandler = () => {
    history.goBack();
  };

  const deleteClickHandler = () => {
    dispatch(deleteData());
    history.goBack();
  };

  return (
    <div className="cities-manager">
      <div className="cities-manager__name">
        {id ? "Редактирование города" : "Добавление города"}
      </div>
      <div className="cities-manager__content">
        <Input
          description="Название"
          placeholder="Введите название города"
          type="text"
          setter={setCitiesManagerDataName}
          isCorrect={true}
          value={data.name}
        />
        <div className="cities-manager__buttons">
          <button onClick={acceptClickHandler} className={saveButtonClass}>
            Сохранить
          </button>
          <button
            onClick={backClickHandler}
            className="cities-manager__button button-default"
          >
            Отмена
          </button>
          {id && (
            <button
              onClick={deleteClickHandler}
              className="cities-manager__button button-alert"
            >
              Удалить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitiesManager;
