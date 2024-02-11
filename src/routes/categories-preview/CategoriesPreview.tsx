import { FC, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.tsx";
import CategoryPreview from "./category-preview/CategoryPreview.tsx";

const CategoriesPreview: FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
