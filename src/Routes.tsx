import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationPage from "./pages/AutorizationPage/AuthorizationPage";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import AdminPage from "./pages/AdminPage/AdminPage";
import OrdersTab from "./components/OrdersTab/OrdersTab";
import CarsTab from "./components/CarsTab/CarsTab";
import CategoryTab from "./components/CategoryTab/CategoryTab";
import CitiesTab from "./components/CitiesTab/CitiesTab";
import CitiesManager from "./components/CitiesManager/CitiesManager";
import CategoryManager from "./components/CategoryManager/CategoryManager";
import CarsManager from "./components/CarsManager/CarsManager";
import OrdersManager from "./components/OrdersManager/OrdersManager";
import { checkIsUserExists } from "./store/User/UserActionCreators";
import { selectUser } from "./store/selectors";

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
      <Route path={`/admin/orders/edit/:id`}>
        <AdminPage>
          <OrdersManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/orders`}>
        <AdminPage>
          <OrdersTab />
        </AdminPage>
      </Route>
      <Route path={`/admin/cars/edit/:id`}>
        <AdminPage>
          <CarsManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/cars/new`}>
        <AdminPage>
          <CarsManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/cars`}>
        <AdminPage>
          <CarsTab />
        </AdminPage>
      </Route>
      <Route path={`/admin/category/edit/:id`}>
        <AdminPage>
          <CategoryManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/category/new`}>
        <AdminPage>
          <CategoryManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/category`}>
        <AdminPage>
          <CategoryTab />
        </AdminPage>
      </Route>
      <Route path={`/admin/cities/edit/:id`}>
        <AdminPage>
          <CitiesManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/cities/new`}>
        <AdminPage>
          <CitiesManager />
        </AdminPage>
      </Route>
      <Route path={`/admin/cities`}>
        <AdminPage>
          <CitiesTab />
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
