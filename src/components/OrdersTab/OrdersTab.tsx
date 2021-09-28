import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchCars } from "../../store/Cars/CarsActionCreators";
import { fetchCities } from "../../store/Cities/CitiesActionCreators";
import { filtersToString } from "../../store/Filter/FilterActionCreators";
import {
  fetchOrders,
  setOrdersFilter,
} from "../../store/Orders/OrdersActionCreators";
import {
  pagesBarInitCalculated,
  pagesBarSetCurrent,
} from "../../store/PagesBar/PagesBarActionCreators";
import {
  selectCars,
  selectCities,
  selectOrders,
  selectPagesBar,
} from "../../store/selectors";
import { dataToUniqueKeyValue } from "../../utils/dataToUniqueKeyValue";
import { getDateData, getStatusData } from "../../utils/filterData";
import Filter from "../Filter/Filter";
import SpinLoader from "../Loader/Loader";
import OrderCard from "../OrderCard/OrderCard";
import PagesBar from "../PagesBar/PagesBar";
import Snackbar from "../Snackbar/Snackbar";
import "./OrdersTab.scss";

const OrdersTab: React.FC = () => {
  const dispatch = useDispatch();
  const { data, dataCount } = useTypedSelector(selectOrders);
  const { currentPage } = useTypedSelector(selectPagesBar);
  const cities = useTypedSelector(selectCities);
  const cars = useTypedSelector(selectCars);
  const countInPage = 6;

  useEffect(() => {
    dispatch(setOrdersFilter(""));
    dispatch(fetchOrders(countInPage, 0));
    dispatch(fetchCities());
    dispatch(fetchCars());
    dispatch(pagesBarSetCurrent(1));
  }, []);

  useEffect(() => {
    if (dataCount) {
      dispatch(pagesBarInitCalculated(1, countInPage, dataCount));
    }
  }, [dataCount]);

  useEffect(() => {
    dispatch(fetchOrders(countInPage, currentPage - 1));
  }, [currentPage]);

  const dataToCards = () => {
    return data?.map((order) => (
      <OrderCard
        key={order.id}
        image={order.carId?.thumbnail?.path}
        carName={order.carId?.name || "Нет данных"}
        city={order.cityId?.name || "Нет данных"}
        point={order.pointId?.name || "Нет данных"}
        dateFrom={order.dateFrom || "Нет данных"}
        dateTo={order.dateTo || "Нет данных"}
        color={order.color || "Нет данных"}
        price={order.price || "Нет данных"}
        isFullTank={order.isFullTank}
        isNeedChildChair={order.isNeedChildChair}
        isRightWheel={order.isNeedChildChair}
        id={order.id}
      />
    ));
  };

  const onClickAccept = () => {
    dispatch(setOrdersFilter(filtersToString("order")));
    dispatch(pagesBarSetCurrent(1));
    dispatch(fetchOrders(countInPage, currentPage - 1));
  };

  const onClickCancel = () => {
    dispatch(setOrdersFilter(""));
    dispatch(pagesBarSetCurrent(1));
    dispatch(fetchOrders(countInPage, currentPage - 1));
  };

  return (
    <div className="orders-tab">
      <h3 className="orders-tab__name">Заказы</h3>
      {cities.data && cars.data ? (
        <div className="orders-tab__content">
          <div className="orders-tab__heading">
            <div className="orders-tab__filters">
              <>
                <Filter
                  dataType="order"
                  head="Выбрать город"
                  dataKey="cityId"
                  data={dataToUniqueKeyValue(cities.data)}
                />
                <Filter
                  dataType="order"
                  head="Выбрать авто"
                  dataKey="carId"
                  data={dataToUniqueKeyValue(cars.data)}
                />
                <Filter
                  dataType="order"
                  head="Выбрать время"
                  dataKey="dateFrom[$gt]"
                  data={getDateData()}
                />
                <Filter
                  dataType="order"
                  head="Выбрать Статус"
                  dataKey="orderStatusId"
                  data={getStatusData()}
                />
              </>
            </div>
            <div className="orders-tab__buttons">
              <button
                className="orders-tab__button button-default"
                onClick={onClickAccept}
              >
                Применить
              </button>
              <button
                className="orders-tab__button button-alert"
                onClick={onClickCancel}
              >
                Сбросить
              </button>
              <Link to={`/admin/orders/new`}>
                <button
                  type="button"
                  className="orders-tab__button button-correct"
                >
                  Добавить
                </button>
              </Link>
            </div>
          </div>
          <div className="orders-tab__orders">
            <Snackbar snackbarId="orders" />
            {data ? dataToCards() : <SpinLoader />}
          </div>
          <PagesBar />
        </div>
      ) : (
        <div className="orders-tab__content">
          <SpinLoader />
        </div>
      )}
    </div>
  );
};

export default OrdersTab;