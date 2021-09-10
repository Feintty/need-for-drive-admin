import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchOrders } from "../../store/Orders/OrdersActionCreators";
import { pagesBarInitCalculated } from "../../store/PagesBar/PagesBarActionCreators";
import SpinLoader from "../Loader/Loader";
import OrderCard from "../OrderCard/OrderCard";
import PagesBar from "../PagesBar/PagesBar";
import "./OrdersTab.scss";

const OrdersTab = () => {
  const dispatch = useDispatch();
  const { data, dataCount } = useTypedSelector((state) => state.orders);
  const { currentPage } = useTypedSelector((state) => state.pages);
  const countInPage = 6;
  useEffect(() => {
    dispatch(fetchOrders(countInPage, 0));
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

  return (
    <div className="orders-tab">
      <h3 className="orders-tab__name">Заказы</h3>
      <div className="orders-tab__content">
        <div className="orders-tab__orders">
          {data ? dataToCards() : <SpinLoader />}
        </div>
        <PagesBar />
      </div>
    </div>
  );
};

export default OrdersTab;
