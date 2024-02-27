import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./categories-preview/CategoriesPreview.tsx";
import Category from "./category/Category.tsx";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase.ts";
import { setCategories } from "../../store/categories/categoriesSlice.ts";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
