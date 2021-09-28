import React from "react";
import { Link } from "react-router-dom";
import { normalizeImgPath } from "../../utils/normalizeImgPath";
import "./OrderCard.scss";
const moment = require("moment");

interface IOrderProps {
  image: string | null;
  carName: string;
  city: string;
  point: string;
  dateFrom: number | string;
  dateTo: number | string;
  color: string;
  price: number | string;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  id: string;
}

const OrderCard: React.FC<IOrderProps> = ({
  image,
  carName,
  city,
  point,
  dateFrom,
  dateTo,
  color,
  price,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
  id,
}) => {
  return (
    <div className="order-card">
      <div className="order-card__car">
        <img
          className="order-card__image"
          alt={`car-${carName}`}
          src={normalizeImgPath(image)}
        />
      </div>

      <div className="order-card__description">
        <div className="order-card__info">
          <b>{carName}</b> в <b>{city}</b>, {point}
        </div>
        <div className="order-card__date">
          {moment(dateFrom).format("DD.MM.YYYY hh:mm ")} —{" "}
          {moment(dateTo).format("DD.MM.YYYY hh:mm ")}
        </div>
        <div className="order-card__color">
          Цвет: <b>{color}</b>
        </div>
      </div>
      <div className="order-card__checkboxes">
        <input
          readOnly
          checked={isFullTank}
          type="checkbox"
          className="checkbox-input"
        ></input>
        <span className="checkbox-text">Полный бак</span>
        <input
          readOnly
          checked={isNeedChildChair}
          type="checkbox"
          className="checkbox-input"
        ></input>
        <span className="checkbox-text">Детское кресло</span>
        <input
          readOnly
          checked={isRightWheel}
          type="checkbox"
          className="checkbox-input"
        ></input>
        <span className="checkbox-text">Правый руль</span>
      </div>
      <div className="order-card__price">{price} ₽</div>
      <Link to={`/admin/orders/edit/${id}`}>
        <button type="button" className="order-car__change button-change">
          Изменить
        </button>
      </Link>
    </div>
  );
};

export default OrderCard;
