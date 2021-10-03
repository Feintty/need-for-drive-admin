import React from "react";
import { Link } from "react-router-dom";
import { selectCars } from "../../store/selectors";
import { normalizeImgPath } from "../../utils/normalizeImgPath";
import SpinLoader from "../Loader/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Table from "../Table/Table";

const CarsTabDataTable = () => {
  const { dataFiltered } = useTypedSelector(selectCars);
  if (dataFiltered && dataFiltered.length > 0) {
    return (
      <Table
        data={dataFiltered?.map((el) => ({
          Изображение: (
            <img
              alt="car"
              className="cars-tab__img"
              src={normalizeImgPath(el.thumbnail.path)}
            />
          ),
          Название: el.name,
          "Цена (от)": el.priceMin,
          "Цена (до)": el.priceMax,
          Категория: el?.categoryId?.name || "Неизвестно",
          Цвета: el.colors.toString() || "Отсутствуют",
          "": (
            <Link to={`/admin/cars/edit/${el.id}`}>
              <button type="button" className="cars-tab__change button-change">
                Изменить
              </button>
            </Link>
          ),
        }))}
      />
    );
  }
  return <SpinLoader />;
};

export default CarsTabDataTable;
