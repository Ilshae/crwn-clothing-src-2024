import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./categories-preview/CategoriesPreview.tsx";
import Category from "./category/Category.tsx";
import { getCategoriesAndDocuments } from "../../utils/firebase/utils.ts";
import { setCategories } from "../../store/categories/actions.ts";
import { useDispatch } from "react-redux";

const Shop: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
