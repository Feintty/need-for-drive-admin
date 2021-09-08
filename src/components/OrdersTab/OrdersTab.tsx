import React from "react";
import Table from "../Table/Table";
import "./OrdersTab.scss";

const OrdersTab = () => {
  return (
    <div className="orders-tab">
      <h3 className="orders-tab__name">Заказы</h3>
      <div className="orders-tab__content">
        <Table
          data={[
            { Цена: 200, Цвет: "синий" },
            { Цена: 200, Цвет: "синий" },
            { Цена: 200, Цвет: "синий" },
            { Цена: 300, Цвет: "Красный" },
          ]}
        />
      </div>
    </div>
  );
};

export default OrdersTab;
