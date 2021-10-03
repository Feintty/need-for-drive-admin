import React from "react";
import { useDispatch } from "react-redux";
import { useDispatchInputValueNumber } from "../../hooks/useDispatchInputValueNumber";
import { useDispatchInputValueText } from "../../hooks/useDispatchInputValueText";
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
  const setCarsManagerName = useDispatchInputValueText(
    setCarsManagerData,
    "name"
  );
  const setCarsManagerPriceMin = useDispatchInputValueNumber(
    setCarsManagerData,
    "priceMin"
  );
  const setCarsManagerPriceMax = useDispatchInputValueNumber(
    setCarsManagerData,
    "priceMax"
  );
  const setCarsManagerTank = useDispatchInputValueNumber(
    setCarsManagerData,
    "tank"
  );
  const setCarsManagerNumber = useDispatchInputValueText(
    setCarsManagerData,
    "number"
  );

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
  return (
    <div className="cars-manager__fields">
      <Input
        description="Модель"
        setter={setCarsManagerName}
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
        setter={setCarsManagerPriceMin}
        value={data.priceMin.toString()}
      />
      <Input
        description="Максимальная цена"
        placeholder="Введите максимальную цену..."
        setter={setCarsManagerPriceMax}
        value={data.priceMax?.toString()}
      />
      <Input
        description="Номер"
        setter={setCarsManagerNumber}
        value={data.number}
      />
      <Input
        description="Кол-во топлива"
        setter={setCarsManagerTank}
        value={data.tank?.toString()}
      />
      <CarsManagerColorsCreator />
    </div>
  );
};

export default CarsManagerFields;
