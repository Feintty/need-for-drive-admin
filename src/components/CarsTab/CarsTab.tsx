import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  fetchCarsFiltered,
  setCarsFilter,
} from "../../store/Cars/CarsActionCreators";
import { fetchCategory } from "../../store/Category/CategoryActionCreators";
import { filtersToString } from "../../store/Filter/FilterActionCreators";
import {
  pagesBarInitCalculated,
  pagesBarSetCurrent,
} from "../../store/PagesBar/PagesBarActionCreators";
import {
  selectCars,
  selectCategory,
  selectPagesBar,
} from "../../store/selectors";
import Filter from "../Filter/Filter";
import PagesBar from "../PagesBar/PagesBar";
import "./CarsTab.scss";
import CarsTabDataTable from "./CarsTabDataTable";

const CarsTab = () => {
  const { dataCount } = useTypedSelector(selectCars);
  const category = useTypedSelector(selectCategory);
  const dispatch = useDispatch();
  const { currentPage } = useTypedSelector(selectPagesBar);
  const countInPage = 8;

  useEffect(() => {
    dispatch(setCarsFilter(""));
    dispatch(fetchCarsFiltered(countInPage, 0));
    dispatch(fetchCategory());
    dispatch(pagesBarSetCurrent(1));
  }, []);

  useEffect(() => {
    if (dataCount) {
      dispatch(pagesBarInitCalculated(1, countInPage, dataCount));
    }
  }, [dataCount]);

  useEffect(() => {
    dispatch(fetchCarsFiltered(countInPage, currentPage - 1));
  }, [currentPage]);

  const onClickAccept = () => {
    dispatch(setCarsFilter(filtersToString("car")));
    dispatch(pagesBarSetCurrent(1));
    dispatch(fetchCarsFiltered(countInPage, currentPage - 1));
  };

  const onClickCancel = () => {
    dispatch(setCarsFilter(""));
    dispatch(pagesBarSetCurrent(1));
    dispatch(fetchCarsFiltered(countInPage, currentPage - 1));
  };

  return (
    <div className="cars-tab">
      <div className="cars-tab__name">Автомобили</div>
      <div className="cars-tab__content">
        <div className="cars-tab__heading">
          <div className="cars-tab__filters">
            {category.data && (
              <Filter
                dataType="car"
                head="Выбрать категорию"
                dataKey="categoryId"
                data={category.data.map((el) => ({ [el.name]: el.id }))}
              />
            )}
          </div>
          <div className="cars-tab__buttons">
            <button
              className="cars-tab__button button-default"
              onClick={onClickAccept}
            >
              Применить
            </button>
            <button
              className="cars-tab__button button-alert"
              onClick={onClickCancel}
            >
              Сбросить
            </button>
            <Link to={`/admin/cars/new`}>
              <button type="button" className="cars-tab__button button-correct">
                Добавить
              </button>
            </Link>
          </div>
        </div>
        <div className="cars-tab__cars">
          <CarsTabDataTable />
          <PagesBar />
        </div>
      </div>
    </div>
  );
};

export default CarsTab;
