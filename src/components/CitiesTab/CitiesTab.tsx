import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchCities } from "../../store/Cities/CitiesActionCreators";
import SpinLoader from "../Loader/Loader";
import Snackbar from "../Snackbar/Snackbar";
import Table from "../Table/Table";
import "./CitiesTab.scss";

const CitiesTab: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return (
    <div className="cities-tab">
      <div className="cities-tab__name">Категории</div>
      <div className="cities-tab__content">
        <div className="cities-tab__heading">
          <div className="cities-tab__buttons">
            <Link to={`/admin/cities/new`}>
              <button
                type="button"
                className="cities-tab__button button-correct"
              >
                Добавить
              </button>
            </Link>
          </div>
        </div>
        <div className="cities-tab__categories">
          <Snackbar snackbarId="cities" />
          {data ? (
            <Table
              data={data?.map((el) => ({
                Название: el.name,
                "": (
                  <Link to={`/admin/cities/edit/${el.id}`}>
                    <button
                      type="button"
                      className="cities-tab__change button-change"
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

export default CitiesTab;
