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

  return (
    <Switch>
      <Redirect
        from={isLogged ? "/auth" : "/admin/*"}
        to={isLogged ? "/admin/orders" : "/auth"}
      />
      <Route path="/auth">
        <AuthorizationPage />
      </Route>
      <Route path="/admin/orders">
        <div>Вы уже авторизованы</div>
        <button onClick={() => dispatch(exitUser())}>Выйти</button>
      </Route>
      <Redirect from="/" to="/auth" />
    </Switch>
  );
};

export default Routes;
