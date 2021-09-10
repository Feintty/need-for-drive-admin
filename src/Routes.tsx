import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationPage from "./pages/AutorizationPage/AuthorizationPage";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { checkIsUserExists } from "./store/User/UserActionCreators";
import AdminPage from "./pages/AdminPage/AdminPage";
import OrdersTab from "./components/OrdersTab/OrdersTab";

const Routes = () => {
  const { isLogged } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogged) {
      dispatch(checkIsUserExists());
    }
  }, []);

  return (
    <Switch>
      <Redirect
        from={isLogged ? "/auth" : "/admin"}
        to={isLogged ? "/admin/orders" : "/auth"}
      />
      <Route exact path="/auth">
        <AuthorizationPage />
      </Route>
      <Route path={`/admin/orders/edit/:id`}>
        <AdminPage>Редактирование заказа</AdminPage>
      </Route>
      <Route path={`/admin/orders`}>
        <AdminPage>
          <OrdersTab />
        </AdminPage>
      </Route>
      <Route path={`/admin/cars`}>
        <AdminPage>Автомобили</AdminPage>
      </Route>
      <Redirect from="/" to={isLogged ? "/admin/orders" : "/auth"} />
      <Route path={`/admin/404`}>
        <AdminPage>Ошибка</AdminPage>
      </Route>
      <Redirect to="/admin/404" />
    </Switch>
  );
};

export default Routes;
