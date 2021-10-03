import React from "react";
import { Route } from "react-router-dom";
import OrdersManager from "../components/OrdersManager/OrdersManager";
import OrdersTab from "../components/OrdersTab/OrdersTab";

const OrderRoutes = () => {
  return (
    <React.Fragment>
      <Route path={`/admin/orders/edit/:id`}>
        <OrdersManager />
      </Route>
      <Route exact path={`/admin/orders`}>
        <OrdersTab />
      </Route>
    </React.Fragment>
  );
};

export default OrderRoutes;
