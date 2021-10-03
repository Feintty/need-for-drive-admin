import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationPage from "../pages/AutorizationPage/AuthorizationPage";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AdminPage from "../pages/AdminPage/AdminPage";
import { checkIsUserExists } from "../store/User/UserActionCreators";
import { selectUser } from "../store/selectors";
import OrderRoutes from "./OrderRoutes";
import CarsRoutes from "./CarsRoutes";
import CategoryRoutes from "./CategoryRoutes";
import CitiesRoutes from "./CitiesRoutes";

const Routes = () => {
  const { isLogged } = useTypedSelector(selectUser);
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
      <Route path="/admin/*">
        <AdminPage>
          <OrderRoutes />
          <CarsRoutes />
          <CategoryRoutes />
          <CitiesRoutes />
        </AdminPage>
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
