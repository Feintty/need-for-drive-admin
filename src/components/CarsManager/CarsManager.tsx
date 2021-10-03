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
import { selectCars, selectCarsManager } from "../../store/selectors";
import CarsManagerCard from "../CarsManagerCard/CarsManagerCard";
import ManagerButtons from "../ManagerButtons/ManagerButtons";
import "./CarsManager.scss";
import CarsManagerFields from "./CarsManagerFields";

const CarsManager = () => {
  const { id } = useParams<{ id: string }>();
  const carsData = useTypedSelector(selectCars);
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useTypedSelector(selectCarsManager);
  const isCarsManagerFieldsCompleted =
    !!data.name &&
    !!data.priceMax &&
    !!data.priceMin &&
    data.colors.length > 0 &&
    !!data.categoryId.id &&
    (data.thumbnail.file !== null || data.thumbnail.path);

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
            name: carById?.thumbnail?.originalname,
          },
          description: carById?.description,
          categoryId: {
            id: carById?.categoryId?.id,
            name: carById?.categoryId?.name,
          },
          colors: carById?.colors,
          number: carById?.number,
          tank: carById?.tank,
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
          <ManagerButtons
            acceptButtonToggle={!!isCarsManagerFieldsCompleted}
            acceptButtonHandler={acceptClickHandler}
            deleteButtonHandler={deleteClickHandler}
            isDeleteButtonDisplay={!!id}
            backButtonHandler={backClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CarsManager;
