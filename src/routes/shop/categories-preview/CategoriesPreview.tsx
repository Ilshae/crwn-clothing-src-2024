import { FC } from "react";
import CategoryPreview from "../category-preview/CategoryPreview.tsx";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categoriesSelectors.ts";
import { CategoryMap } from "../../../types.ts";

const CategoriesPreview: FC = () => {
  const categoriesMap: CategoryMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
