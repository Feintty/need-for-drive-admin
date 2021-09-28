import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setCarsManagerData } from "../../store/CarsManager/CarsManagerActionCreators";
import { selectCarsManager, selectCategory } from "../../store/selectors";
import Filter from "../Filter/Filter";
import Input from "../Input/Input";

const CarsManagerFields = () => {
  const { data } = useTypedSelector(selectCarsManager);
  const categoryData = useTypedSelector(selectCategory);
  const [newColor, setNewColor] = useState("");
  const dispatch = useDispatch();
  const setCarsManagerName = (value: string) => {
    dispatch(setCarsManagerData({ name: value }));
  };

  const setCarsManagerCategoryId = (value: string) => {
    const categoryById =
      categoryData.data && categoryData.data.find((el) => el.id === value);
    dispatch(
      setCarsManagerData({
        categoryId: {
          id: value,
          name: categoryById?.name ? categoryById?.name : "",
        },
      })
    );
  };

  const setCarsManagerPriceMin = (value: string) => {
    if (!isNaN(Number(value))) {
      dispatch(
        setCarsManagerData({
          priceMin: Number(value),
        })
      );
    }
  };

  const setCarsManagerPriceMax = (value: string) => {
    if (!isNaN(Number(value))) {
      dispatch(
        setCarsManagerData({
          priceMax: Number(value),
        })
      );
    }
  };

  const setCarsManagerNewColor = () => {
    if (newColor !== "") {
      dispatch(setCarsManagerData({ colors: [...data.colors, newColor] }));
      setNewColor("");
    }
  };

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
  return (
    <div className="cars-manager__fields">
      <Input
        description="Модель"
        placeholder="Введите название модели..."
        type="text"
        setter={setCarsManagerName}
        isCorrect={true}
        value={data.name}
      />
      {categoryData.data && (
        <Filter
          head="Выбрать категорию"
          data={categoryData.data.map((el) => ({ [el.name]: el.id }))}
          setter={setCarsManagerCategoryId}
          description="Тип автомобиля"
        />
      )}
      <Input
        description="Минимальная цена"
        placeholder="Введите минимальную цену..."
        type="text"
        setter={setCarsManagerPriceMin}
        isCorrect={true}
        value={data.priceMin.toString()}
      />
      <Input
        description="Максимальная цена"
        placeholder="Введите максимальную цену..."
        type="text"
        setter={setCarsManagerPriceMax}
        isCorrect={true}
        value={data.priceMax.toString()}
      />
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
    </div>
  );
};

export default CarsManagerFields;
