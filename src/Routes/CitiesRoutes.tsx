import React from "react";
import { Route } from "react-router-dom";
import CitiesManager from "../components/CitiesManager/CitiesManager";
import CitiesTab from "../components/CitiesTab/CitiesTab";

const CitiesRoutes = () => {
  return (
    <>
      <Route path={`/admin/cities/edit/:id`}>
        <CitiesManager />
      </Route>
      <Route path={`/admin/cities/new`}>
        <CitiesManager />
      </Route>
      <Route exact path={`/admin/cities`}>
        <CitiesTab />
      </Route>
    </>
  );
};

export default CitiesRoutes;
