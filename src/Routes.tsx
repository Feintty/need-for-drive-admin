import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationPage from "./pages/AutorizationPage/AuthorizationPage";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { checkIsUserExists, exitUser } from "./store/User/UserActionCreators";

const Routes = () => {
  const { isLogged } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogged) {
      dispatch(checkIsUserExists());
    }
  }, []);

  const unauthorizedRoutes = (
    <Switch>
      <Route path="/auth">
        <AuthorizationPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  );

  const authorizedRoutes = (
    <Switch>
      <Route path="/admin/orders">
        <div>Вы уже авторизованы</div>
        <button onClick={() => dispatch(exitUser())}>Выйти</button>
      </Route>
      <Redirect to="/admin/orders" />
    </Switch>
  );

  if (isLogged) {
    return authorizedRoutes;
  } else {
    return unauthorizedRoutes;
  }
};

export default Routes;
