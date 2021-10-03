import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  calculateProgress,
  setCarsManagerData,
} from "../../store/CarsManager/CarsManagerActionCreators";
import { selectCarsManager } from "../../store/selectors";
import { normalizeImgPath } from "../../utils/normalizeImgPath";
import Input from "../Input/Input";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./CarsManagerCard.scss";

const CarsManagerCard = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector(selectCarsManager);
  const { id } = useParams<{ id: string }>();

  const setCarsManagerDescription = (value: string) => {
    dispatch(setCarsManagerData({ description: value }));
  };

  const setCarsManagerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      const fileName = e.currentTarget.files[0].name;
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.currentTarget?.files[0]);
      reader.onload = function () {
        dispatch(
          setCarsManagerData({
            thumbnail: {
              path: reader.result,
              name: fileName,
              file: file,
            },
          })
        );
      };
    }
  };

  return (
    <div className="cars-manager-card">
      <img
        className="cars-manager-card__img"
        src={normalizeImgPath(data.thumbnail.path)}
      />
      <h3 className="cars-manager-card__car-name">{data.name}</h3>
      <h4 className="cars-manager-card__type">{data.categoryId.name}</h4>
      <div className="cars-manager-card__file-manager">
        <div className="cars-manager-card__file-select">
          {data.thumbnail.name ? data.thumbnail.name : "Выберите файл..."}
        </div>
        <label className="cars-manager-card__file-search">
          <input
            type="file"
            className="cars-manager-card__file-input"
            onChange={setCarsManagerImage}
            accept="image/*"
          />
          Обзор
        </label>
      </div>
      <div className="cars-manager-card__progress">
        <ProgressBar progress={calculateProgress(!!id)} />
      </div>
      <div className="cars-manager-card__description">
        <Input
          description="Описание"
          placeholder=" "
          type="text"
          setter={setCarsManagerDescription}
          isCorrect={true}
          value={data.description}
        />
      </div>
    </div>
  );
};

export default CarsManagerCard;
