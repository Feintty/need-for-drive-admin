import React from "react";
import { Route } from "react-router-dom";
import CategoryManager from "../components/CategoryManager/CategoryManager";
import CategoryTab from "../components/CategoryTab/CategoryTab";

const CategoryRoutes = () => {
  return (
    <>
      <Route path={`/admin/category/edit/:id`}>
        <CategoryManager />
      </Route>
      <Route path={`/admin/category/new`}>
        <CategoryManager />
      </Route>
      <Route exact path={`/admin/category`}>
        <CategoryTab />
      </Route>
    </>
  );
};

export default CategoryRoutes;
