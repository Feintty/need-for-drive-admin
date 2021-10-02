import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  addCategoryData,
  deleteCategoryData,
  setCategoryManagerData,
  setCategoryManagerId,
  updateCategoryData,
} from "../../store/CategoryManager/CategoryManagerActionCreators";
import { selectCategory, selectCategoryManager } from "../../store/selectors";
import Input from "../Input/Input";
import ManagerButtons from "../ManagerButtons/ManagerButtons";
import "./CategoryManager.scss";

const CategoryManager: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryManager = useTypedSelector(selectCategoryManager);
  const categoryData = useTypedSelector(selectCategory);

  const isCategoryManagerFieldsCompleted =
    categoryManager.data.description && categoryManager.data.name;

  useEffect(() => {
    if (id) {
      const categoryById = categoryData.data?.find((el) => el.id === id);
      dispatch(setCategoryManagerId(id));
      dispatch(
        setCategoryManagerData({
          name: categoryById.name,
          description: categoryById.description,
        })
      );
    } else {
      dispatch(setCategoryManagerData({ name: "", description: "" }));
    }
  }, []);

  const setCategoryManagerName = (value: string) => {
    dispatch(setCategoryManagerData({ name: value }));
  };

  const setCategoryManagerDescription = (value: string) => {
    dispatch(setCategoryManagerData({ description: value }));
  };

  const acceptClickHandler = () => {
    if (id) {
      dispatch(updateCategoryData());
    } else {
      dispatch(addCategoryData());
    }
    history.goBack();
  };

  const backClickHandler = () => {
    history.goBack();
  };

  const deleteClickHandler = () => {
    dispatch(deleteCategoryData());
    history.goBack();
  };

  return (
    <div className="category-manager">
      <div className="category-manager__name">
        {id ? "Редактирование категории" : "Добавление категории"}
      </div>
      <div className="category-manager__content">
        <Input
          description="Название"
          placeholder="Введите название категории"
          type="text"
          setter={setCategoryManagerName}
          isCorrect={true}
          value={categoryManager.data.name}
        />
        <Input
          description="Описание"
          placeholder="Введите описание"
          type="text"
          setter={setCategoryManagerDescription}
          isCorrect={true}
          value={categoryManager.data.description}
        />
        <ManagerButtons
          acceptButtonToggle={!!isCategoryManagerFieldsCompleted}
          acceptButtonHandler={acceptClickHandler}
          deleteButtonHandler={deleteClickHandler}
          isDeleteButtonDisplay={!!id}
          backButtonHandler={backClickHandler}
        />
      </div>
    </div>
  );
};

export default CategoryManager;
