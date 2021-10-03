import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setCarsManagerData } from "../../store/CarsManager/CarsManagerActionCreators";
import { selectCarsManager } from "../../store/selectors";
import Input from "../Input/Input";

const CarsManagerColorsCreator = () => {
  const [newColor, setNewColor] = useState("");
  const { data } = useTypedSelector(selectCarsManager);
  const dispatch = useDispatch();

  const carsManagerRemoveColor = (value: string) => {
    dispatch(
      setCarsManagerData({ colors: data.colors.filter((el) => el !== value) })
    );
  };

  const createColorCheckboxes = () => {
    return data.colors.map((el) => (
      <>
        <input
          checked={true}
          type="checkbox"
          className="checkbox-input"
        ></input>
        <span
          onClick={() => carsManagerRemoveColor(el)}
          className="checkbox-text"
        >
          {el}
        </span>
      </>
    ));
  };

  const setCarsManagerNewColor = () => {
    if (newColor !== "") {
      dispatch(setCarsManagerData({ colors: [...data.colors, newColor] }));
      setNewColor("");
    }
  };

  return (
    <>
      <div className="cars-manager__colors-input">
        <Input
          description="Цвета"
          placeholder="Введите цвет..."
          type="text"
          setter={setNewColor}
          isCorrect={true}
          value={newColor}
        />
        <button
          className="cars-manager__colors-new"
          onClick={setCarsManagerNewColor}
        ></button>
      </div>
      {data.colors.length > 0 && (
        <div className="cars-manager__colors">{createColorCheckboxes()}</div>
      )}
    </>
  );
};

export default CarsManagerColorsCreator;
