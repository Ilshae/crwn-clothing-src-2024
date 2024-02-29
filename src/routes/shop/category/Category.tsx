import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../navigation/product-card/ProductCard.tsx";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categoriesSelectors.ts";
import { Container, Title } from "./CategoryStyles.ts";
import { CategoryItem, CategoryMap } from "../../../types.ts";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap: CategoryMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <Container>
        {products &&
          products.map((product: CategoryItem) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Container>
    </>
  );
};

export default Category;
