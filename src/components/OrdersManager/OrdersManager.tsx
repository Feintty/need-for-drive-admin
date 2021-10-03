import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useDispatchInputValueNumber } from "../../hooks/useDispatchInputValueNumber";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  deleteOrdersManagerData,
  setOrdersManagerData,
  setOrdersManagerId,
  updateOrdersManagerData,
} from "../../store/OrdersManager/OrdersManagerActionCreators";
import { selectOrders, selectOrdersManager } from "../../store/selectors";
import Input from "../Input/Input";
import ManagerButtons from "../ManagerButtons/ManagerButtons";
import OrderManagerCheckboxes from "./OrderManagerCheckboxes";
import "./OrdersManager.scss";

const OrdersManager: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const ordersData = useTypedSelector(selectOrders);
  const { data } = useTypedSelector(selectOrdersManager);
  const isOrderManagerFieldsCompleted = data.price;
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

  const setOrdersManagerPrice = useDispatchInputValueNumber(
    setOrdersManagerData,
    "price"
  );

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
        <OrderManagerCheckboxes />
        <ManagerButtons
          acceptButtonToggle={!!isOrderManagerFieldsCompleted}
          acceptButtonHandler={acceptClickHandler}
          deleteButtonHandler={deleteClickHandler}
          isDeleteButtonDisplay={true}
          backButtonHandler={backClickHandler}
        />
      </div>
    </div>
  );
};

export default OrdersManager;
