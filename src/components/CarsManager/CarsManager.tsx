import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  addCarsManagerData,
  deleteCarsMangerData,
  setCarsManagerData,
  setCarsManagerDefault,
  setCarsManagerId,
  updateCarsManagerData,
} from "../../store/CarsManager/CarsManagerActionCreators";
import CarsManagerCard from "../CarsManagerCard/CarsManagerCard";
import "./CarsManager.scss";
import CarsManagerFields from "./CarsManagerFields";

const CarsManager = () => {
  const { id } = useParams<{ id: string }>();
  const carsData = useTypedSelector((state) => state.cars);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCarsManagerDefault());
    if (id) {
      const carById = carsData.dataFiltered?.find((el) => el.id === id);
      dispatch(setCarsManagerId(id));
      dispatch(
        setCarsManagerData({
          priceMax: carById?.priceMax,
          priceMin: carById?.priceMin,
          name: carById?.name,
          thumbnail: {
            path: carById?.thumbnail?.path,
            name: carById?.thumbnail?.name,
          },
          description: carById?.description,
          categoryId: {
            id: carById?.categoryId?.id,
            name: carById?.categoryId?.name,
          },
          colors: carById?.colors,
        })
      );
    } else {
      dispatch(setCarsManagerDefault());
    }
  }, []);

  const acceptClickHandler = () => {
    if (id) {
      dispatch(updateCarsManagerData());
    } else {
      dispatch(addCarsManagerData());
    }
    history.goBack();
  };

  const backClickHandler = () => {
    history.goBack();
  };

  const deleteClickHandler = () => {
    dispatch(deleteCarsMangerData());
    history.goBack();
  };

  return (
    <div className="cars-manager">
      <div className="cars-manager__name">Карточка автомобиля</div>
      <div className="cars-manager__content">
        <CarsManagerCard />
        <div className="cars-manager__settings">
          <h3 className="cars-manager__heading">Настройки автомобиля</h3>
          <CarsManagerFields />
          <div className="cars-manager__buttons">
            <button
              onClick={acceptClickHandler}
              className="category-manager__button button-correct"
            >
              Сохранить
            </button>
            <button
              onClick={backClickHandler}
              className="category-manager__button button-default"
            >
              Отмена
            </button>
            {id && (
              <button
                onClick={deleteClickHandler}
                className="category-manager__button button-alert"
              >
                Удалить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsManager;
