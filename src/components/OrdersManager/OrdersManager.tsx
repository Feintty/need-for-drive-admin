import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  deleteOrdersManagerData,
  setOrdersManagerData,
  setOrdersManagerId,
  updateOrdersManagerData,
} from "../../store/OrdersManager/OrdersManagerActionCreators";
import { selectOrders, selectOrdersManager } from "../../store/selectors";
import Input from "../Input/Input";
import "./OrdersManager.scss";

const OrdersManager: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const ordersData = useTypedSelector(selectOrders);
  const { data } = useTypedSelector(selectOrdersManager);
  const isOrderManagerFieldsCompleted = data.price;
  const saveButtonClass = classNames(
    "category-manager__button",
    isOrderManagerFieldsCompleted ? "button-correct" : "button-disabled"
  );
  useEffect(() => {
    const orderById = ordersData.data?.find((el) => el.id === id);
    dispatch(setOrdersManagerId(id));
    dispatch(
      setOrdersManagerData({
        rateId: orderById.rateId?.id,
        price: orderById.price,
        isFullTank: orderById.isFullTank,
        isNeedChildChair: orderById.isNeedChildChair,
        isRightWheel: orderById.isRightWheel,
      })
    );
  }, []);

  const setOrdersManagerPrice = (value: string) => {
    if (!isNaN(Number(value))) {
      dispatch(setOrdersManagerData({ price: Number(value) }));
    }
  };

  const setOrdersManagerIsFullTank = () => {
    dispatch(setOrdersManagerData({ isFullTank: !data.isFullTank }));
  };

  const setOrdersManagerIsNeedChildChair = () => {
    dispatch(
      setOrdersManagerData({ isNeedChildChair: !data.isNeedChildChair })
    );
  };

  const setOrdersManagerIsRightWheel = () => {
    dispatch(setOrdersManagerData({ isRightWheel: !data.isRightWheel }));
  };

  const acceptClickHandler = () => {
    dispatch(updateOrdersManagerData());
    history.goBack();
  };

  const backClickHandler = () => {
    history.goBack();
  };

  const deleteClickHandler = () => {
    dispatch(deleteOrdersManagerData());
    history.goBack();
  };

  return (
    <div className="orders-manager">
      <div className="orders-manager__name">Редактирование заказа</div>
      <div className="orders-manager__content">
        <Input
          description="Цена"
          placeholder="Введите цену..."
          type="text"
          setter={setOrdersManagerPrice}
          isCorrect={true}
          value={data.price.toString()}
        />
        <div className="orders-manager__checkboxes">
          <label
            onChange={setOrdersManagerIsFullTank}
            className="orders-manager__checkbox"
          >
            <input
              checked={data.isFullTank}
              type="checkbox"
              className="checkbox-input"
            ></input>
            <span className="checkbox-text">Полный бак</span>
          </label>
          <label
            onChange={setOrdersManagerIsNeedChildChair}
            className="orders-manager__checkbox"
          >
            <input
              checked={data.isNeedChildChair}
              type="checkbox"
              className="checkbox-input"
            ></input>
            <span className="checkbox-text">Детское кресло</span>
          </label>
          <label
            onChange={setOrdersManagerIsRightWheel}
            className="orders-manager__checkbox"
          >
            <input
              checked={data.isRightWheel}
              type="checkbox"
              className="checkbox-input"
            ></input>
            <span className="checkbox-text">Правый руль</span>
          </label>
        </div>
        <div className="orders-manager__buttons">
          <button onClick={acceptClickHandler} className={saveButtonClass}>
            Сохранить
          </button>
          <button
            onClick={backClickHandler}
            className="orders-manager__button button-default"
          >
            Отмена
          </button>
          <button
            onClick={deleteClickHandler}
            className="orders-manager__button button-alert"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersManager;
