import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setCarsManagerData } from "../../store/CarsManager/CarsManagerActionCreators";
import { selectCarsManager, selectCategory } from "../../store/selectors";
import Filter from "../Filter/Filter";
import Input from "../Input/Input";
import CarsManagerColorsCreator from "./CarsManagerColorsCreator";

const CarsManagerFields = () => {
  const { data } = useTypedSelector(selectCarsManager);
  const categoryData = useTypedSelector(selectCategory);
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

  const setCarsManagerTank = (value: string) => {
    if (!isNaN(Number(value))) {
      dispatch(
        setCarsManagerData({
          tank: Number(value),
        })
      );
    }
  };

  const setCarsManagerNumber = (value: string) => {
    dispatch(setCarsManagerData({ number: value }));
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
        value={data.priceMax?.toString()}
      />
      <Input
        description="Номер"
        placeholder="Введите номер..."
        type="text"
        setter={setCarsManagerNumber}
        isCorrect={true}
        value={data.number}
      />
      <Input
        description="Кол-во топлива"
        placeholder="Введите кол-во топлива..."
        type="text"
        setter={setCarsManagerTank}
        isCorrect={true}
        value={data.tank?.toString()}
      />
      <CarsManagerColorsCreator />
    </div>
  );
};

export default CarsManagerFields;
