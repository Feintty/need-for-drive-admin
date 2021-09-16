import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchCategory } from "../../store/Category/CategoryActionCreators";
import SpinLoader from "../Loader/Loader";
import Snackbar from "../Snackbar/Snackbar";
import Table from "../Table/Table";
import "./CategoryTab.scss";

const CategoryTab = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <div className="category-tab">
      <div className="category-tab__name">Категории</div>
      <div className="category-tab__content">
        <div className="category-tab__heading">
          <div className="category-tab__buttons">
            <button className="category-tab__button button-default">
              Добавить
            </button>
          </div>
        </div>
        <div className="category-tab__categories">
          <Snackbar snackbarId="category" />
          {data ? (
            <Table
              data={data?.map((el) => ({
                Название: el.name,
                Описание: el.description,
                "": (
                  <Link to={`/admin/category/edit/${el.id}`}>
                    <button
                      type="button"
                      className="category-tab__change button-change"
                    >
                      Изменить
                    </button>
                  </Link>
                ),
              }))}
            />
          ) : (
            <SpinLoader />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryTab;
