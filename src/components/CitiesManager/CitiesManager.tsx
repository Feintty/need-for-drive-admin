import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useDispatchInputValueText } from "../../hooks/useDispatchInputValueText";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  addData,
  deleteData,
  setCitiesManagerData,
  updateData,
} from "../../store/CitiesManager/CitiesManagerActionCreators";
import { selectCities, selectCitiesManager } from "../../store/selectors";
import Input from "../Input/Input";
import ManagerButtons from "../ManagerButtons/ManagerButtons";
import "./CitiesManager.scss";

const CitiesManager: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useTypedSelector(selectCitiesManager);
  const citiesData = useTypedSelector(selectCities);

  useEffect(() => {
    if (id) {
      const cityById = citiesData.data?.find((el) => el.id === id);
      dispatch(setCitiesManagerData({ id, name: cityById.name }));
    } else {
      dispatch(setCitiesManagerData({ id: "", name: "" }));
    }
  }, []);

  const setCitiesManagerDataName = useDispatchInputValueText(
    setCitiesManagerData,
    "name"
  );

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
        <ManagerButtons
          acceptButtonToggle={!!data.name}
          acceptButtonHandler={acceptClickHandler}
          deleteButtonHandler={deleteClickHandler}
          isDeleteButtonDisplay={!!id}
          backButtonHandler={backClickHandler}
        />
      </div>
    </div>
  );
};

export default CitiesManager;
