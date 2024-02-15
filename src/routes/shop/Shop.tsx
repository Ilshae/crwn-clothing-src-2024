import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./categories-preview/CategoriesPreview.tsx";
import Category from "./category/Category.tsx";

const Shop: FC = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
