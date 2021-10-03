import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setOrdersManagerData } from "../../store/OrdersManager/OrdersManagerActionCreators";
import { selectOrdersManager } from "../../store/selectors";

const OrderManagerCheckboxes = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector(selectOrdersManager);

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

  return (
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
  );
};

export default OrderManagerCheckboxes;
