import { FC } from "react";
import CategoryPreview from "./category-preview/CategoryPreview.tsx";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/categories/selectors.ts";

const CategoriesPreview: FC = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
