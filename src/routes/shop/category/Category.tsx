import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../navigation/product-card/ProductCard.tsx";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/categoriesSelectors.ts";
import Spinner from "../../../components/spinner/Spinner.tsx";
import { Container, Title } from "./CategoryStyles.ts";
import { CategoryItem } from "../../../types.ts";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          {products &&
            products.map((product: CategoryItem) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Container>
      )}
    </>
  );
};

export default Category;
