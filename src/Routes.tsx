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
        from={isLogged ? "/auth" : "/admin/*"}
        to={isLogged ? "/admin/orders" : "/auth"}
      />
      <Route path="/auth">
        <AuthorizationPage />
      </Route>
      <AdminPage>
        <Route path={`/admin/orders`} exact>
          <OrdersTab />
        </Route>
        <Route path={`/admin/cars`}>Автомобили</Route>
      </AdminPage>
      <Redirect from="/" to="/auth" />
    </Switch>
  );
};

export default Routes;
