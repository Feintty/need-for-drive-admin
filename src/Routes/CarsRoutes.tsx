import React from "react";
import { Route } from "react-router-dom";
import CarsManager from "../components/CarsManager/CarsManager";
import CarsTab from "../components/CarsTab/CarsTab";

const CarsRoutes = () => {
  return (
    <>
      <Route path={`/admin/cars/edit/:id`}>
        <CarsManager />
      </Route>
      <Route path={`/admin/cars/new`}>
        <CarsManager />
      </Route>
      <Route exact path={`/admin/cars`}>
        <CarsTab />
      </Route>
    </>
  );
};

export default CarsRoutes;
