import { FC } from "react";
import CategoryPreview from "../category-preview/CategoryPreview.tsx";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/categoriesSelectors.ts";
import Spinner from "../../../components/spinner/Spinner.tsx";

const CategoriesPreview: FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
